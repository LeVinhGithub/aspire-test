require 'swagger_helper'

RSpec.describe 'JobOpeningFavorite', type: :request do
  # jitera-hook-for-rswag-example
  path '/api/job_opening_favorites/id' do
    delete 'Destroy job_opening_favorites' do
      tags 'job_opening_favorites'
      consumes 'application/json'

      parameter name: id, in: :path, type: :string, description: 'Url Params'

      parameter name: :params, in: :body, schema: {
        type: :object,
        properties: {}
      }
      response '200', 'delete' do
        examples 'application/json' => {}

        let(:resource) { create(:job_opening_favorite) }
        let(:id) { resource.id }
        run_test! do |response|
          expect(response.status).to eq(200)
        end
      end
    end
  end

  path '/api/job_opening_favorites/id' do
    put 'Update  job_opening_favorites' do
      tags 'job_opening_favorites'
      consumes 'application/json'

      parameter name: id, in: :path, type: :string, description: 'Url Params'

      parameter name: :params, in: :body, schema: {
        type: :object,
        properties: {

          job_opening_favorites: {
            type: :object,
            properties: {

              job_opening_id: {
                type: :integer
              },

              applicant_id: {
                type: :integer
              }

            }
          }

        }
      }
      response '200', 'update' do
        examples 'application/json' => {

          'job_opening_favorite' => {

            'id' => 'INTEGER',

            'created_at' => 'DATETIME',

            'updated_at' => 'DATETIME',

            'job_opening_id' => 'INTEGER',

            'applicant_id' => 'INTEGER'

          },

          'error_object' => {}

        }

        let(:resource) { build(:job_opening_favorite) }

        let(:params) { { job_opening_favorites: resource.attributes.to_hash } }

        let(:id) { resource.id }
        run_test! do |response|
          expect(response.status).to eq(200)
        end
      end
    end
  end
  path '/api/job_opening_favorites/id' do
    get 'Show job_opening_favorites' do
      tags 'job_opening_favorites'
      consumes 'application/json'

      parameter name: id, in: :path, type: :string, description: 'Url Params'

      parameter name: :params, in: :body, schema: {
        type: :object,
        properties: {}
      }
      response '200', 'show' do
        examples 'application/json' => {

          'job_opening_favorite' => {

            'id' => 'INTEGER',

            'created_at' => 'DATETIME',

            'updated_at' => 'DATETIME',

            'job_opening_id' => 'INTEGER',

            'applicant_id' => 'INTEGER'

          }

        }

        let(:resource) { create(:job_opening_favorite) }
        let(:id) { resource.id }
        run_test! do |response|
          expect(response.status).to eq(200)
        end
      end
    end
  end

  path '/api/job_opening_favorites' do
    post 'Create job_opening_favorites' do
      tags 'job_opening_favorites'
      consumes 'application/json'

      parameter name: :params, in: :body, schema: {
        type: :object,
        properties: {

          job_opening_favorites: {
            type: :object,
            properties: {

              job_opening_id: {
                type: :integer
              },

              applicant_id: {
                type: :integer
              }

            }
          }

        }
      }
      response '200', 'create' do
        examples 'application/json' => {

          'job_opening_favorite' => {

            'id' => 'INTEGER',

            'created_at' => 'DATETIME',

            'updated_at' => 'DATETIME',

            'job_opening_id' => 'INTEGER',

            'applicant_id' => 'INTEGER'

          },

          'error_object' => {}

        }

        let(:resource) { build(:job_opening_favorite) }

        let(:params) { { job_opening_favorites: resource.attributes.to_hash } }

        run_test! do |response|
          expect(response.status).to eq(200)
        end
      end
    end
  end

  path '/api/job_opening_favorites' do
    get 'List job_opening_favorites' do
      tags 'job_opening_favorites'
      consumes 'application/json'

      parameter name: :params, in: :body, schema: {
        type: :object,
        properties: {

          job_opening_favorites: {
            type: :object,
            properties: {

              job_opening_id: {
                type: :integer
              },

              applicant_id: {
                type: :integer
              }

            }
          },

          pagination_page: {
            type: :page_number
          },

          pagination_limit: {
            type: :page_size
          }

        }
      }
      response '200', 'filter' do
        examples 'application/json' => {

          'total_pages' => 'INTEGER',

          'job_opening_favorites' => 'ARRAY'

        }

        let(:resource) { create(:job_opening_favorite) }
        let(:params) {}
        run_test! do |response|
          expect(response.status).to eq(200)
        end
      end
    end
  end
end
