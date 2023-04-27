require 'swagger_helper'

RSpec.describe 'ApplicantLanguage', type: :request do
  # jitera-hook-for-rswag-example
  path '/api/applicant_languages/id' do
    delete 'Destroy applicant_languages' do
      tags 'applicant_languages'
      consumes 'application/json'

      parameter name: id, in: :path, type: :string, description: 'Url Params'

      parameter name: :params, in: :body, schema: {
        type: :object,
        properties: {}
      }
      response '200', 'delete' do
        examples 'application/json' => {}

        let(:resource) { create(:applicant_language) }
        let(:id) { resource.id }
        run_test! do |response|
          expect(response.status).to eq(200)
        end
      end
    end
  end

  path '/api/applicant_languages/id' do
    put 'Update  applicant_languages' do
      tags 'applicant_languages'
      consumes 'application/json'

      parameter name: id, in: :path, type: :string, description: 'Url Params'

      parameter name: :params, in: :body, schema: {
        type: :object,
        properties: {

          applicant_languages: {
            type: :object,
            properties: {

              proficiency: {
                type: :enum
              },

              language_id: {
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

          'applicant_language' => {

            'id' => 'INTEGER',

            'created_at' => 'DATETIME',

            'updated_at' => 'DATETIME',

            'proficiency' => 'ENUM',

            'language_id' => 'INTEGER',

            'applicant_id' => 'INTEGER'

          },

          'error_object' => {}

        }

        let(:resource) { build(:applicant_language) }

        let(:params) { { applicant_languages: resource.attributes.to_hash } }

        let(:id) { resource.id }
        run_test! do |response|
          expect(response.status).to eq(200)
        end
      end
    end
  end

  path '/api/applicant_languages' do
    post 'Create applicant_languages' do
      tags 'applicant_languages'
      consumes 'application/json'

      parameter name: :params, in: :body, schema: {
        type: :object,
        properties: {

          applicant_languages: {
            type: :object,
            properties: {

              proficiency: {
                type: :enum
              },

              language_id: {
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

          'applicant_language' => {

            'id' => 'INTEGER',

            'created_at' => 'DATETIME',

            'updated_at' => 'DATETIME',

            'proficiency' => 'ENUM',

            'language_id' => 'INTEGER',

            'applicant_id' => 'INTEGER'

          },

          'error_object' => {}

        }

        let(:resource) { build(:applicant_language) }

        let(:params) { { applicant_languages: resource.attributes.to_hash } }

        run_test! do |response|
          expect(response.status).to eq(200)
        end
      end
    end
  end

  path '/api/applicant_languages' do
    get 'List applicant_languages' do
      tags 'applicant_languages'
      consumes 'application/json'

      parameter name: :params, in: :body, schema: {
        type: :object,
        properties: {

          applicant_languages: {
            type: :object,
            properties: {

              proficiency: {
                type: :enum
              },

              language_id: {
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

          'applicant_languages' => 'ARRAY'

        }

        let(:resource) { create(:applicant_language) }
        let(:params) {}
        run_test! do |response|
          expect(response.status).to eq(200)
        end
      end
    end
  end
end
