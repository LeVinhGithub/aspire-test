<?php

namespace App\Services;

use App\Models\Message;
use Exception;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\DB;
use StorageSupport;

class MessageService extends BaseService
{
    public function filter(array $queries)
    {
        $queryBuilder = Message::query();

        $this->buildFilter($queryBuilder, [
            ['where', 'applicant_id', '=', data_get($queries, 'messages.applicant_id')],
            ['orWhere', 'text', 'startWith', data_get($queries, 'messages.text')],
            ['orWhere', 'attachment', 'startWith', data_get($queries, 'messages.attachment')],
            ['orWhere', 'reply_to_message_id', '=', data_get($queries, 'messages.reply_to_message_id')],
            ['orWhere', 'company_id', '=', data_get($queries, 'messages.company_id')],
        ]);

        $queryBuilder->with(['company', 'company.messages', 'company.messages.company', 'company.messages.company', 'company.messages', 'company.messages.company', 'company.messages.company', 'company', 'company.messages', 'company.messages.company', 'company.messages.company', 'company.messages', 'company.messages.company', 'company.messages.company']);

        $queryBuilder->orderBy('created_at', 'desc');

        return $queryBuilder->paginate(
            data_get($queries, 'pagination_limit', config('app.pagination.limit')),
            ['*'],
            'pagination_page',
            data_get($queries, 'pagination_page', 1),
        );
    }

        public function show(string $id): Message
        {
            $message = Message::findOrFail($id);
            $message->load(['company', 'company.messages', 'company.messages.company', 'company.messages.company', 'company.messages', 'company.messages.company', 'company.messages.company', 'company', 'company.messages', 'company.messages.company', 'company.messages.company', 'company.messages', 'company.messages.company', 'company.messages.company']);

            return $message;
        }

        public function create(array $input): Message
        {
            $storedFiles = [];
            DB::beginTransaction();
            try {
                $message = Message::create($input);

                if (isset($input['attachment']) && ! empty($input['attachment'])) {
                    $attachment = StorageSupport::files(
                        $input['attachment']
                    );
                    $message->saveAttachment($attachment);
                    array_push($storedFiles, $attachment);
                }
                DB::commit();
                $message->load(['company', 'company.messages', 'company.messages.company', 'company.messages.company', 'company.messages', 'company.messages.company', 'company.messages.company', 'company', 'company.messages', 'company.messages.company', 'company.messages.company', 'company.messages', 'company.messages.company', 'company.messages.company']);

                return $message;
            } catch (Exception $e) {
                DB::rollBack();
                if (! empty($storedFiles)) {
                    StorageSupport::remove(Arr::pluck($storedFiles, 'filename'));
                }
                throw $e;
            }
        }

        public function update(array $input, string $id): Message
        {
            $storedFiles = [];
            DB::beginTransaction();
            try {
                $message = Message::findOrFail($id);
                $message->update($input);

                if (isset($input['attachment'])) {
                    if (get_class($input['attachment']) == UploadedFile::class) {
                        $message->attachment()->update([
                            'deleted' => true,
                        ]);
                        $attachment = StorageSupport::files(
                            $input['attachment']
                        );
                        $message->saveAttachment($attachment);
                        array_push($storedFiles, $attachment);
                    } elseif (empty($input['attachment'])) {
                        $message->attachment()->update([
                            'deleted' => true,
                        ]);
                    }
                }
                DB::commit();
                $message->load(['company', 'company.messages', 'company.messages.company', 'company.messages.company', 'company.messages', 'company.messages.company', 'company.messages.company', 'company', 'company.messages', 'company.messages.company', 'company.messages.company', 'company.messages', 'company.messages.company', 'company.messages.company']);

                return $message;
            } catch (Exception $e) {
                DB::rollBack();
                if (! empty($storedFiles)) {
                    StorageSupport::remove(Arr::pluck($storedFiles, 'filename'));
                }
                throw $e;
            }
        }

        public function delete(string $id): int
        {
            DB::beginTransaction();
            try {
                $message = Message::findOrFail($id);
                $message->_storageAttachments()->update(['deleted' => true]);
                $deleted = Message::destroy($id);
                DB::commit();

                return $deleted;
            } catch (Exception $e) {
                DB::rollBack();
                throw $e;
            }
        }
}
