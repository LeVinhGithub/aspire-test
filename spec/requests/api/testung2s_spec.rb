require 'swagger_helper'

RSpec.describe 'api/testung2s', type: :request do
  before do
    create(:testung2)
  end

  # jitera-hook-for-rswag-example

  path '/api/testung2s/{id}' do
    delete 'Destroy testung2s' do
      tags 'testung2s'
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

        let(:resource) { create(:testung2) }

        let(:params) {}

        let(:id) { resource.id }

        run_test! do |response|
          expect(response.status).to eq(200)
        end
      end
    end
  end

  path '/api/testung2s/{id}' do
    put 'Update testung2s' do
      tags 'testung2s'
      consumes 'application/json'
      parameter name: 'id', in: :path, type: 'string', description: 'id'
      parameter name: :params, in: :body, schema: {
        type: :object,
        properties: {
          testung2s: {
            type: :object,
            properties: {
              testing1_id: {
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
          'testung2' => {
            'id' => 'integer',

            'created_at' => 'datetime',

            'updated_at' => 'datetime',

            'testing1' => {
              'id' => 'integer',

              'created_at' => 'datetime',

              'updated_at' => 'datetime',

              'cstring' => 'string',

              'stext' => 'text',

              'cint' => 'integer',

              'cfloat' => 'float',

              'cdate' => 'date',

              'cdatetime' => 'datetime',

              'cenump' => 'enum_type',

              'c' => 'boolean',

              'cfile' => 'file'

            },

            'testing1_id' => 'foreign_key',

            'email' => 'string'

          },

          'error_object' => {}

        }

        let(:resource) { create(:testung2) }

        let(:id) { resource.id }

        let(:params) { { id: id, testung2s: { id: id } } }

        run_test! do |response|
          expect(response.status).to eq(200)
        end
      end
    end
  end

  path '/api/testung2s/{id}' do
    get 'Show testung2s' do
      tags 'testung2s'
      consumes 'application/json'
      parameter name: 'id', in: :path, type: 'string', description: 'id'
      parameter name: :params, in: :body, schema: {
        type: :object,
        properties: {
        }
      }
      response '200', 'show' do
        examples 'application/json' => {
          'testung2' => {
            'id' => 'integer',

            'created_at' => 'datetime',

            'updated_at' => 'datetime',

            'testing1' => {
              'id' => 'integer',

              'created_at' => 'datetime',

              'updated_at' => 'datetime',

              'cstring' => 'string',

              'stext' => 'text',

              'cint' => 'integer',

              'cfloat' => 'float',

              'cdate' => 'date',

              'cdatetime' => 'datetime',

              'cenump' => 'enum_type',

              'c' => 'boolean',

              'cfile' => 'file'

            },

            'testing1_id' => 'foreign_key',

            'email' => 'string'

          },

          'message' => {}

        }

        let(:resource) { create(:testung2) }

        let(:params) {}

        let(:id) { resource.id }

        run_test! do |response|
          expect(response.status).to eq(200)
        end
      end
    end
  end

  path '//api/testung2s' do
    post 'Create testung2s' do
      tags 'testung2s'
      consumes 'application/json'
      parameter name: :params, in: :body, schema: {
        type: :object,
        properties: {
          testung2s: {
            type: :object,
            properties: {
              testing1_id: {
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
          'testung2' => {
            'id' => 'integer',

            'created_at' => 'datetime',

            'updated_at' => 'datetime',

            'testing1' => {
              'id' => 'integer',

              'created_at' => 'datetime',

              'updated_at' => 'datetime',

              'cstring' => 'string',

              'stext' => 'text',

              'cint' => 'integer',

              'cfloat' => 'float',

              'cdate' => 'date',

              'cdatetime' => 'datetime',

              'cenump' => 'enum_type',

              'c' => 'boolean',

              'cfile' => 'file'

            },

            'testing1_id' => 'foreign_key',

            'email' => 'string'

          },

          'error_object' => {}

        }

        let(:resource) { build(:testung2) }

        let(:params) { { testung2s: resource.attributes.to_hash } }

        run_test! do |response|
          expect(response.status).to eq(200)
        end
      end
    end
  end

  path '/api/testung2s' do
    get 'List testung2s' do
      tags 'testung2s'
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
          testung2s: {
            type: :object,
            properties: {
              testing1_id: {
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

          'testung2s' =>
        [
          {

            'id' => 'integer',

            'created_at' => 'datetime',

            'updated_at' => 'datetime',

            'testing1' => {
              'id' => 'integer',

              'created_at' => 'datetime',

              'updated_at' => 'datetime',

              'cstring' => 'string',

              'stext' => 'text',

              'cint' => 'integer',

              'cfloat' => 'float',

              'cdate' => 'date',

              'cdatetime' => 'datetime',

              'cenump' => 'enum_type',

              'c' => 'boolean',

              'cfile' => 'file'

            },

            'testing1_id' => 'foreign_key',

            'email' => 'string'

          }
        ],

          'message' => {}

        }

        let(:resource) { create(:testung2) }

        let(:params) {}
        run_test! do |response|
          expect(response.status).to eq(200)
        end
      end
    end
  end
end
