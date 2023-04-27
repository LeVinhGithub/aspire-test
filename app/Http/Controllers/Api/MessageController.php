<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\Message\CreateMessageRequest;
use App\Http\Requests\Message\UpdateMessageRequest;
use App\Http\Resources\Message\CreateMessageResource;
use App\Http\Resources\Message\FilterMessageCollection;
use App\Http\Resources\Message\ShowMessageResource;
use App\Http\Resources\Message\UpdateMessageResource;
use App\Services\MessageService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class MessageController extends Controller
{
    protected MessageService $messageService;

    public function __construct(MessageService $messageService)
    {
        $this->messageService = $messageService;
    }

    public function filter(Request $request): FilterMessageCollection
    {
        $messages = $this->messageService->filter($request->query());

        return new FilterMessageCollection($messages);
    }

    public function show(string $id): ShowMessageResource
    {
        $message = $this->messageService->show($id);

        return new ShowMessageResource($message);
    }

    public function create(CreateMessageRequest $request): CreateMessageResource
    {
        $message = $this->messageService->create($request->all());

        return new CreateMessageResource($message);
    }

    public function update(UpdateMessageRequest $request, string $id): UpdateMessageResource
    {
        $message = $this->messageService->update($request->all(), $id);

        return new UpdateMessageResource($message);
    }

    public function delete(string $id): JsonResponse
    {
        $this->messageService->delete($id);

        return response()->json(null);
    }
}
