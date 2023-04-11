require 'swagger_helper'

RSpec.describe 'api/testing1s', type: :request do
  before do
    create(:testing1)
  end

  # jitera-hook-for-rswag-example

  path '/api/testing1s/{id}' do
    delete 'Destroy testing1s' do
      tags 'testing1s'
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

        let(:resource) { create(:testing1) }

        let(:params) {}

        let(:id) { resource.id }

        run_test! do |response|
          expect(response.status).to eq(200)
        end
      end
    end
  end

  path '/api/testing1s/{id}' do
    put 'Update testing1s' do
      tags 'testing1s'
      consumes 'application/json'
      parameter name: 'id', in: :path, type: 'string', description: 'id'
      parameter name: :params, in: :body, schema: {
        type: :object,
        properties: {
          testing1s: {
            type: :object,
            properties: {
              cstring: {
                type: :string,
                example: 'string'
              },

              stext: {
                type: :text,
                example: 'text'
              },

              cint: {
                type: :integer,
                example: 'integer'
              },

              cfloat: {
                type: :float,
                example: 'float'
              },

              cdate: {
                type: :date,
                example: 'date'
              },

              cdatetime: {
                type: :datetime,
                example: 'datetime'
              },

              cenump: {
                type: :enum_type,
                example: 'enum_type'
              },

              c: {
                type: :boolean,
                example: 'boolean'
              },

              cfile: {
                type: :file,
                example: 'file'
              },

              testung2s_count: {
                type: :counter_cache,
                example: 'counter_cache'
              }

            }
          }
        }
      }
      response '200', 'update' do
        examples 'application/json' => {
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

            'cfile' => 'file',

            'testung2s' =>
  [
    {

      'id' => 'integer',

      'created_at' => 'datetime',

      'updated_at' => 'datetime',

      'testing1_id' => 'foreign_key'

    }
  ],

            'testung2s_count' => 'counter_cache'

          },

          'error_object' => {}

        }

        let(:resource) { create(:testing1) }

        let(:id) { resource.id }

        let(:params) { { id: id, testing1s: { id: id } } }

        run_test! do |response|
          expect(response.status).to eq(200)
        end
      end
    end
  end

  path '/api/testing1s/{id}' do
    get 'Show testing1s' do
      tags 'testing1s'
      consumes 'application/json'
      parameter name: 'id', in: :path, type: 'string', description: 'id'
      parameter name: :params, in: :body, schema: {
        type: :object,
        properties: {
        }
      }
      response '200', 'show' do
        examples 'application/json' => {
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

            'cfile' => 'file',

            'testung2s' =>
  [
    {

      'id' => 'integer',

      'created_at' => 'datetime',

      'updated_at' => 'datetime',

      'testing1_id' => 'foreign_key'

    }
  ],

            'testung2s_count' => 'counter_cache'

          },

          'message' => {}

        }

        let(:resource) { create(:testing1) }

        let(:params) {}

        let(:id) { resource.id }

        run_test! do |response|
          expect(response.status).to eq(200)
        end
      end
    end
  end

  path '//api/testing1s' do
    post 'Create testing1s' do
      tags 'testing1s'
      consumes 'application/json'
      parameter name: :params, in: :body, schema: {
        type: :object,
        properties: {
          testing1s: {
            type: :object,
            properties: {
              cstring: {
                type: :string,
                example: 'string'
              },

              stext: {
                type: :text,
                example: 'text'
              },

              cint: {
                type: :integer,
                example: 'integer'
              },

              cfloat: {
                type: :float,
                example: 'float'
              },

              cdate: {
                type: :date,
                example: 'date'
              },

              cdatetime: {
                type: :datetime,
                example: 'datetime'
              },

              cenump: {
                type: :enum_type,
                example: 'enum_type'
              },

              c: {
                type: :boolean,
                example: 'boolean'
              },

              cfile: {
                type: :file,
                example: 'file'
              },

              testung2s_count: {
                type: :counter_cache,
                example: 'counter_cache'
              }

            }
          }
        }
      }
      response '200', 'create' do
        examples 'application/json' => {
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

            'cfile' => 'file',

            'testung2s' =>
  [
    {

      'id' => 'integer',

      'created_at' => 'datetime',

      'updated_at' => 'datetime',

      'testing1_id' => 'foreign_key'

    }
  ],

            'testung2s_count' => 'counter_cache'

          },

          'error_object' => {}

        }

        let(:resource) { build(:testing1) }

        let(:params) { { testing1s: resource.attributes.to_hash } }

        run_test! do |response|
          expect(response.status).to eq(200)
        end
      end
    end
  end

  path '/api/testing1s' do
    get 'List testing1s' do
      tags 'testing1s'
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
          testing1s: {
            type: :object,
            properties: {
              cstring: {
                type: :string,
                example: 'string'
              },

              stext: {
                type: :text,
                example: 'text'
              },

              cint: {
                type: :integer,
                example: 'integer'
              },

              cfloat: {
                type: :float,
                example: 'float'
              },

              cdate: {
                type: :date,
                example: 'date'
              },

              cdatetime: {
                type: :datetime,
                example: 'datetime'
              },

              cenump: {
                type: :enum_type,
                example: 'enum_type'
              },

              c: {
                type: :boolean,
                example: 'boolean'
              },

              testung2s_count: {
                type: :counter_cache,
                example: 'counter_cache'
              }

            }
          }
        }
      }
      response '200', 'index' do
        examples 'application/json' => {
          'total_pages' => 'integer',

          'testing1s' =>
        [
          {

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

            'cfile' => 'file',

            'testung2s' =>
        [
          {

            'id' => 'integer',

            'created_at' => 'datetime',

            'updated_at' => 'datetime',

            'testing1_id' => 'foreign_key'

          }
        ],

            'testung2s_count' => 'counter_cache'

          }
        ],

          'message' => {}

        }

        let(:resource) { create(:testing1) }

        let(:params) {}
        run_test! do |response|
          expect(response.status).to eq(200)
        end
      end
    end
  end
end
