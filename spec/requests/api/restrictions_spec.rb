require 'swagger_helper'

RSpec.describe 'Restriction', type: :request do
  # jitera-hook-for-rswag-example
  path '/api/restrictions/id' do
    delete 'Destroy restrictions' do
      tags 'restrictions'
      consumes 'application/json'

      parameter name: id, in: :path, type: :string, description: 'Url Params'

      parameter name: :params, in: :body, schema: {
        type: :object,
        properties: {}
      }
      response '200', 'delete' do
        examples 'application/json' => {}

        let(:resource) { create(:restriction) }
        let(:id) { resource.id }
        run_test! do |response|
          expect(response.status).to eq(200)
        end
      end
    end
  end

  path '/api/restrictions/id' do
    put 'Update  restrictions' do
      tags 'restrictions'
      consumes 'application/json'

      parameter name: id, in: :path, type: :string, description: 'Url Params'

      parameter name: :params, in: :body, schema: {
        type: :object,
        properties: {

          restrictions: {
            type: :object,
            properties: {

              company_id: {
                type: :integer
              },

              applicant_id: {
                type: :integer
              },

              reason: {
                type: :enum
              }

            }
          }

        }
      }
      response '200', 'update' do
        examples 'application/json' => {

          'restriction' => {

            'id' => 'INTEGER',

            'created_at' => 'DATETIME',

            'updated_at' => 'DATETIME',

            'company_id' => 'INTEGER',

            'company' => {

              'id' => 'INTEGER',

              'created_at' => 'DATETIME',

              'updated_at' => 'DATETIME',

              'name' => 'STRING',

              'logo' => 'FILE',

              'location' => 'STRING',

              'launched_year' => 'STRING',

              'business_details' => 'TEXT',

              'number_of_employees' => 'INTEGER',

              'industry_id' => 'INTEGER',

              'mission' => 'TEXT',

              'vision' => 'TEXT',

              'value' => 'TEXT',

              'representative_photo' => 'FILE',

              'representative_profile' => 'TEXT',

              'ipo' => 'ENUM',

              'representative_name' => 'STRING',

              'slug' => 'STRING',

              'image' => 'FILE',

              'capital' => 'STRING',

              'ipo' => 'BOOLEAN'

            },

            'applicant_id' => 'INTEGER',

            'applicant' => {

              'id' => 'INTEGER',

              'created_at' => 'DATETIME',

              'updated_at' => 'DATETIME',

              'full_name' => 'STRING',

              'furigana' => 'STRING',

              'phone_number' => 'STRING',

              'birthdate' => 'DATE',

              'location_id' => 'INTEGER',

              'address' => 'STRING',

              'income_range_id' => 'INTEGER',

              'availability' => 'ENUM',

              'resume_file' => 'FILE',

              'description' => 'STRING',

              'management_experience_id' => 'INTEGER',

              'email' => 'STRING',

              'gender' => 'ENUM',

              'restrictions' => 'ARRAY',

              'restrictions' => 'ARRAY'

            },

            'reason' => 'ENUM'

          },

          'error_object' => {}

        }

        let(:resource) { build(:restriction) }

        let(:params) { { restrictions: resource.attributes.to_hash } }

        let(:id) { resource.id }
        run_test! do |response|
          expect(response.status).to eq(200)
        end
      end
    end
  end
  path '/api/restrictions/id' do
    get 'Show restrictions' do
      tags 'restrictions'
      consumes 'application/json'

      parameter name: id, in: :path, type: :string, description: 'Url Params'

      parameter name: :params, in: :body, schema: {
        type: :object,
        properties: {}
      }
      response '200', 'show' do
        examples 'application/json' => {

          'restriction' => {

            'id' => 'INTEGER',

            'created_at' => 'DATETIME',

            'updated_at' => 'DATETIME',

            'company_id' => 'INTEGER',

            'company' => {

              'id' => 'INTEGER',

              'created_at' => 'DATETIME',

              'updated_at' => 'DATETIME',

              'name' => 'STRING',

              'logo' => 'FILE',

              'location' => 'STRING',

              'launched_year' => 'STRING',

              'business_details' => 'TEXT',

              'number_of_employees' => 'INTEGER',

              'industry_id' => 'INTEGER',

              'mission' => 'TEXT',

              'vision' => 'TEXT',

              'value' => 'TEXT',

              'representative_photo' => 'FILE',

              'representative_profile' => 'TEXT',

              'ipo' => 'ENUM',

              'representative_name' => 'STRING',

              'slug' => 'STRING',

              'image' => 'FILE',

              'capital' => 'STRING',

              'ipo' => 'BOOLEAN'

            },

            'applicant_id' => 'INTEGER',

            'applicant' => {

              'id' => 'INTEGER',

              'created_at' => 'DATETIME',

              'updated_at' => 'DATETIME',

              'full_name' => 'STRING',

              'furigana' => 'STRING',

              'phone_number' => 'STRING',

              'birthdate' => 'DATE',

              'location_id' => 'INTEGER',

              'address' => 'STRING',

              'income_range_id' => 'INTEGER',

              'availability' => 'ENUM',

              'resume_file' => 'FILE',

              'description' => 'STRING',

              'management_experience_id' => 'INTEGER',

              'email' => 'STRING',

              'gender' => 'ENUM',

              'restrictions' => 'ARRAY',

              'restrictions' => 'ARRAY'

            },

            'reason' => 'ENUM'

          }

        }

        let(:resource) { create(:restriction) }
        let(:id) { resource.id }
        run_test! do |response|
          expect(response.status).to eq(200)
        end
      end
    end
  end

  path '/api/restrictions' do
    post 'Create restrictions' do
      tags 'restrictions'
      consumes 'application/json'

      parameter name: :params, in: :body, schema: {
        type: :object,
        properties: {

          restrictions: {
            type: :object,
            properties: {

              company_id: {
                type: :integer
              },

              applicant_id: {
                type: :integer
              },

              reason: {
                type: :enum
              }

            }
          }

        }
      }
      response '200', 'create' do
        examples 'application/json' => {

          'restriction' => {

            'id' => 'INTEGER',

            'created_at' => 'DATETIME',

            'updated_at' => 'DATETIME',

            'company_id' => 'INTEGER',

            'company' => {

              'id' => 'INTEGER',

              'created_at' => 'DATETIME',

              'updated_at' => 'DATETIME',

              'name' => 'STRING',

              'logo' => 'FILE',

              'location' => 'STRING',

              'launched_year' => 'STRING',

              'business_details' => 'TEXT',

              'number_of_employees' => 'INTEGER',

              'industry_id' => 'INTEGER',

              'mission' => 'TEXT',

              'vision' => 'TEXT',

              'value' => 'TEXT',

              'representative_photo' => 'FILE',

              'representative_profile' => 'TEXT',

              'ipo' => 'ENUM',

              'representative_name' => 'STRING',

              'slug' => 'STRING',

              'image' => 'FILE',

              'capital' => 'STRING',

              'ipo' => 'BOOLEAN'

            },

            'applicant_id' => 'INTEGER',

            'applicant' => {

              'id' => 'INTEGER',

              'created_at' => 'DATETIME',

              'updated_at' => 'DATETIME',

              'full_name' => 'STRING',

              'furigana' => 'STRING',

              'phone_number' => 'STRING',

              'birthdate' => 'DATE',

              'location_id' => 'INTEGER',

              'address' => 'STRING',

              'income_range_id' => 'INTEGER',

              'availability' => 'ENUM',

              'resume_file' => 'FILE',

              'description' => 'STRING',

              'management_experience_id' => 'INTEGER',

              'email' => 'STRING',

              'gender' => 'ENUM',

              'restrictions' => 'ARRAY',

              'restrictions' => 'ARRAY'

            },

            'reason' => 'ENUM'

          },

          'error_object' => {}

        }

        let(:resource) { build(:restriction) }

        let(:params) { { restrictions: resource.attributes.to_hash } }

        run_test! do |response|
          expect(response.status).to eq(200)
        end
      end
    end
  end

  path '/api/restrictions' do
    get 'List restrictions' do
      tags 'restrictions'
      consumes 'application/json'

      parameter name: :params, in: :body, schema: {
        type: :object,
        properties: {

          restrictions: {
            type: :object,
            properties: {

              company_id: {
                type: :integer
              },

              applicant_id: {
                type: :integer
              },

              reason: {
                type: :enum
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

          'restrictions' => 'ARRAY'

        }

        let(:resource) { create(:restriction) }
        let(:params) {}
        run_test! do |response|
          expect(response.status).to eq(200)
        end
      end
    end
  end
end
