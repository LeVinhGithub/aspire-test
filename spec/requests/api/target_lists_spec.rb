require 'swagger_helper'

RSpec.describe 'TargetList', type: :request do
  # jitera-hook-for-rswag-example
  path '/api/target_lists/id' do
    delete 'Destroy target_lists' do
      tags 'target_lists'
      consumes 'application/json'

      parameter name: id, in: :path, type: :string, description: 'Url Params'

      parameter name: :params, in: :body, schema: {
        type: :object,
        properties: {}
      }
      response '200', 'delete' do
        examples 'application/json' => {}

        let(:resource) { create(:target_list) }
        let(:id) { resource.id }
        run_test! do |response|
          expect(response.status).to eq(200)
        end
      end
    end
  end

  path '/api/target_lists/id' do
    put 'Update  target_lists' do
      tags 'target_lists'
      consumes 'application/json'

      parameter name: id, in: :path, type: :string, description: 'Url Params'

      parameter name: :params, in: :body, schema: {
        type: :object,
        properties: {

          target_lists: {
            type: :object,
            properties: {

              title: {
                type: :string
              },

              company_id: {
                type: :integer
              }

            }
          }

        }
      }
      response '200', 'update' do
        examples 'application/json' => {

          'target_list' => {

            'id' => 'INTEGER',

            'created_at' => 'DATETIME',

            'updated_at' => 'DATETIME',

            'title' => 'STRING',

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

              'listing_classification' => 'ENUM',

              'representative_name' => 'STRING',

              'slug' => 'STRING',

              'image' => 'FILE',

              'capital' => 'STRING',

              'ipo' => 'BOOLEAN',

              'business_id' => 'STRING',

              'name_furigana' => 'STRING'

            }

          },

          'error_object' => {}

        }

        let(:resource) { build(:target_list) }

        let(:params) { { target_lists: resource.attributes.to_hash } }

        let(:id) { resource.id }
        run_test! do |response|
          expect(response.status).to eq(200)
        end
      end
    end
  end
  path '/api/target_lists/id' do
    get 'Show target_lists' do
      tags 'target_lists'
      consumes 'application/json'

      parameter name: id, in: :path, type: :string, description: 'Url Params'

      parameter name: :params, in: :body, schema: {
        type: :object,
        properties: {}
      }
      response '200', 'show' do
        examples 'application/json' => {

          'target_list' => {

            'id' => 'INTEGER',

            'created_at' => 'DATETIME',

            'updated_at' => 'DATETIME',

            'title' => 'STRING',

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

              'listing_classification' => 'ENUM',

              'representative_name' => 'STRING',

              'slug' => 'STRING',

              'image' => 'FILE',

              'capital' => 'STRING',

              'ipo' => 'BOOLEAN',

              'business_id' => 'STRING',

              'name_furigana' => 'STRING'

            },

            'target_list_applicants' => 'ARRAY'

          }

        }

        let(:resource) { create(:target_list) }
        let(:id) { resource.id }
        run_test! do |response|
          expect(response.status).to eq(200)
        end
      end
    end
  end

  path '/api/target_lists' do
    post 'Create target_lists' do
      tags 'target_lists'
      consumes 'application/json'

      parameter name: :params, in: :body, schema: {
        type: :object,
        properties: {

          target_lists: {
            type: :object,
            properties: {

              title: {
                type: :string
              },

              company_id: {
                type: :integer
              }

            }
          }

        }
      }
      response '200', 'create' do
        examples 'application/json' => {

          'target_list' => {

            'id' => 'INTEGER',

            'created_at' => 'DATETIME',

            'updated_at' => 'DATETIME',

            'title' => 'STRING',

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

              'listing_classification' => 'ENUM',

              'representative_name' => 'STRING',

              'slug' => 'STRING',

              'image' => 'FILE',

              'capital' => 'STRING',

              'ipo' => 'BOOLEAN',

              'business_id' => 'STRING',

              'name_furigana' => 'STRING'

            }

          },

          'error_object' => {}

        }

        let(:resource) { build(:target_list) }

        let(:params) { { target_lists: resource.attributes.to_hash } }

        run_test! do |response|
          expect(response.status).to eq(200)
        end
      end
    end
  end

  path '/api/target_lists' do
    get 'List target_lists' do
      tags 'target_lists'
      consumes 'application/json'

      parameter name: :params, in: :body, schema: {
        type: :object,
        properties: {

          target_lists: {
            type: :object,
            properties: {

              title: {
                type: :string
              },

              company_id: {
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

          'target_lists' => 'ARRAY'

        }

        let(:resource) { create(:target_list) }
        let(:params) {}
        run_test! do |response|
          expect(response.status).to eq(200)
        end
      end
    end
  end
end
