require 'swagger_helper'

RSpec.describe 'api/test2s', type: :request do
  before do
    create(:test2)
  end

  # jitera-hook-for-rswag-example

  path '/api/test2s/{id}' do
    delete 'Destroy test2s' do
      tags 'test2s'
      consumes 'application/json'
      parameter name: 'id', in: :path, type: 'string', description: 'id'
      parameter name: :params, in: :body, schema: {
        type: :object,
        properties: {
        }
      }
      response '200', 'delete' do
        examples 'application/json' => {
          'message' => {}

        }

        let(:resource) { create(:test2) }

        let(:params) {}

        let(:id) { resource.id }

        run_test! do |response|
          expect(response.status).to eq(200)
        end
      end
    end
  end

  path '/api/test2s/{id}' do
    put 'Update test2s' do
      tags 'test2s'
      consumes 'application/json'
      parameter name: 'id', in: :path, type: 'string', description: 'id'
      parameter name: :params, in: :body, schema: {
        type: :object,
        properties: {
          test2s: {
            type: :object,
            properties: {
              user_id: {
                type: :foreign_key,
                example: 'foreign_key'
              },

              email: {
                type: :string,
                example: 'string'
              }

            }
          }
        }
      }
      response '200', 'update' do
        examples 'application/json' => {
          'test2' => {
            'id' => 'integer',

            'created_at' => 'datetime',

            'updated_at' => 'datetime',

            'user' => {
              'id' => 'integer',

              'created_at' => 'datetime',

              'updated_at' => 'datetime',

              'name' => 'string',

              'introduce' => 'text',

              'test2s_count' => 'counter_cache'

            },

            'user_id' => 'foreign_key',

            'email' => 'string'

          },

          'error_object' => {}

        }

        let(:resource) { create(:test2) }

        let(:id) { resource.id }

        let(:params) { { id: id, test2s: { id: id } } }

        run_test! do |response|
          expect(response.status).to eq(200)
        end
      end
    end
  end

  path '/api/test2s/{id}' do
    get 'Show test2s' do
      tags 'test2s'
      consumes 'application/json'
      parameter name: 'id', in: :path, type: 'string', description: 'id'
      parameter name: :params, in: :body, schema: {
        type: :object,
        properties: {
        }
      }
      response '200', 'show' do
        examples 'application/json' => {
          'test2' => {
            'id' => 'integer',

            'created_at' => 'datetime',

            'updated_at' => 'datetime',

            'user' => {
              'id' => 'integer',

              'created_at' => 'datetime',

              'updated_at' => 'datetime',

              'name' => 'string',

              'introduce' => 'text',

              'test2s_count' => 'counter_cache'

            },

            'user_id' => 'foreign_key',

            'email' => 'string'

          },

          'message' => {}

        }

        let(:resource) { create(:test2) }

        let(:params) {}

        let(:id) { resource.id }

        run_test! do |response|
          expect(response.status).to eq(200)
        end
      end
    end
  end

  path '//api/test2s' do
    post 'Create test2s' do
      tags 'test2s'
      consumes 'application/json'
      parameter name: :params, in: :body, schema: {
        type: :object,
        properties: {
          test2s: {
            type: :object,
            properties: {
              user_id: {
                type: :foreign_key,
                example: 'foreign_key'
              },

              email: {
                type: :string,
                example: 'string'
              }

            }
          }
        }
      }
      response '200', 'create' do
        examples 'application/json' => {
          'test2' => {
            'id' => 'integer',

            'created_at' => 'datetime',

            'updated_at' => 'datetime',

            'user' => {
              'id' => 'integer',

              'created_at' => 'datetime',

              'updated_at' => 'datetime',

              'name' => 'string',

              'introduce' => 'text',

              'test2s_count' => 'counter_cache'

            },

            'user_id' => 'foreign_key',

            'email' => 'string'

          },

          'error_object' => {}

        }

        let(:resource) { build(:test2) }

        let(:params) { { test2s: resource.attributes.to_hash } }

        run_test! do |response|
          expect(response.status).to eq(200)
        end
      end
    end
  end

  path '/api/test2s' do
    get 'List test2s' do
      tags 'test2s'
      consumes 'application/json'
      parameter name: :params, in: :query, schema: {
        type: :object,
        properties: {
          pagination_page: {
            type: :pagination_page,
            example: 'pagination_page'
          },
          pagination_limit: {
            type: :pagination_limit,
            example: 'pagination_limit'
          },
          test2s: {
            type: :object,
            properties: {
              user_id: {
                type: :foreign_key,
                example: 'foreign_key'
              },

              email: {
                type: :string,
                example: 'string'
              }

            }
          }
        }
      }
      response '200', 'index' do
        examples 'application/json' => {
          'total_pages' => 'integer',

          'test2s' =>
        [
          {

            'id' => 'integer',

            'created_at' => 'datetime',

            'updated_at' => 'datetime',

            'user' => {
              'id' => 'integer',

              'created_at' => 'datetime',

              'updated_at' => 'datetime',

              'name' => 'string',

              'introduce' => 'text',

              'test2s_count' => 'counter_cache'

            },

            'user_id' => 'foreign_key',

            'email' => 'string'

          }
        ],

          'message' => {}

        }

        let(:resource) { create(:test2) }

        let(:params) {}
        run_test! do |response|
          expect(response.status).to eq(200)
        end
      end
    end
  end
end
