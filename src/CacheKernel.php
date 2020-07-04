<?php

namespace App;

use Symfony\Bundle\FrameworkBundle\HttpCache\HttpCache;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class CacheKernel extends HttpCache
{
    /**
     * Invalidate cache and force update
     * Purge request will immediately update response
     * Response will be up to date on purge request
     *
     * @param Request $request
     * @param bool $catch
     * @return Response
     * @throws \Exception
     */
    protected function invalidate(Request $request, $catch = false)
    {
        if ('UPDATE' !== $request->getMethod()) {
            return parent::invalidate($request, $catch);
        }

        if ('127.0.0.1' !== $request->getClientIp()) {
            return new Response(
                'Invalid HTTP method',
                Response::HTTP_BAD_REQUEST
            );
        }

        $response = new Response();
        if ($this->getStore()->purge($request->getUri())) {
            $response->setStatusCode(Response::HTTP_OK, 'Purged');
        } else {
            $response->setStatusCode(Response::HTTP_NOT_FOUND, 'Not found');
        }

        return $response;
    }
}