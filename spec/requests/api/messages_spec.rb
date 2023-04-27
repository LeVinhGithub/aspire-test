require 'swagger_helper'

RSpec.describe 'Message', type: :request do
  # jitera-hook-for-rswag-example
  path '/api/messages/id' do
    delete 'Destroy messages' do
      tags 'messages'
      consumes 'application/json'

      parameter name: id, in: :path, type: :string, description: 'Url Params'

      parameter name: :params, in: :body, schema: {
        type: :object,
        properties: {}
      }
      response '200', 'delete' do
        examples 'application/json' => {}

        let(:resource) { create(:message) }
        let(:id) { resource.id }
        run_test! do |response|
          expect(response.status).to eq(200)
        end
      end
    end
  end

  path '/api/messages/id' do
    put 'Update  messages' do
      tags 'messages'
      consumes 'application/json'

      parameter name: id, in: :path, type: :string, description: 'Url Params'

      parameter name: :params, in: :body, schema: {
        type: :object,
        properties: {

          messages: {
            type: :object,
            properties: {

              applicant_id: {
                type: :integer
              },

              text: {
                type: :text
              },

              attachment: {
                type: :file
              },

              reply_to_message_id: {
                type: :integer
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

          'message' => {

            'id' => 'INTEGER',

            'created_at' => 'DATETIME',

            'updated_at' => 'DATETIME',

            'applicant_id' => 'INTEGER',

            'text' => 'TEXT',

            'attachment' => 'FILE',

            'reply_to_message_id' => 'INTEGER',

            'attachment' => 'FILE',

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

              'messages' => 'ARRAY',

              'messages' => 'ARRAY',

              'image' => 'FILE',

              'capital' => 'STRING',

              'ipo' => 'BOOLEAN'

            },

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

              'messages' => 'ARRAY',

              'messages' => 'ARRAY'

            }

          },

          'error_object' => {}

        }

        let(:resource) { build(:message) }

        let(:params) { { messages: resource.attributes.to_hash } }

        let(:id) { resource.id }
        run_test! do |response|
          expect(response.status).to eq(200)
        end
      end
    end
  end
  path '/api/messages/id' do
    get 'Show messages' do
      tags 'messages'
      consumes 'application/json'

      parameter name: id, in: :path, type: :string, description: 'Url Params'

      parameter name: :params, in: :body, schema: {
        type: :object,
        properties: {}
      }
      response '200', 'show' do
        examples 'application/json' => {

          'message' => {

            'id' => 'INTEGER',

            'created_at' => 'DATETIME',

            'updated_at' => 'DATETIME',

            'applicant_id' => 'INTEGER',

            'text' => 'TEXT',

            'attachment' => 'FILE',

            'reply_to_message_id' => 'INTEGER',

            'attachment' => 'FILE',

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

              'messages' => 'ARRAY',

              'messages' => 'ARRAY',

              'image' => 'FILE',

              'capital' => 'STRING',

              'ipo' => 'BOOLEAN'

            },

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

              'messages' => 'ARRAY',

              'messages' => 'ARRAY'

            }

          }

        }

        let(:resource) { create(:message) }
        let(:id) { resource.id }
        run_test! do |response|
          expect(response.status).to eq(200)
        end
      end
    end
  end

  path '/api/messages' do
    post 'Create messages' do
      tags 'messages'
      consumes 'application/json'

      parameter name: :params, in: :body, schema: {
        type: :object,
        properties: {

          messages: {
            type: :object,
            properties: {

              applicant_id: {
                type: :integer
              },

              text: {
                type: :text
              },

              attachment: {
                type: :file
              },

              reply_to_message_id: {
                type: :integer
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

          'message' => {

            'id' => 'INTEGER',

            'created_at' => 'DATETIME',

            'updated_at' => 'DATETIME',

            'applicant_id' => 'INTEGER',

            'text' => 'TEXT',

            'attachment' => 'FILE',

            'reply_to_message_id' => 'INTEGER',

            'attachment' => 'FILE',

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

              'messages' => 'ARRAY',

              'messages' => 'ARRAY',

              'image' => 'FILE',

              'capital' => 'STRING',

              'ipo' => 'BOOLEAN'

            },

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

              'messages' => 'ARRAY',

              'messages' => 'ARRAY'

            }

          },

          'error_object' => {}

        }

        let(:resource) { build(:message) }

        let(:params) { { messages: resource.attributes.to_hash } }

        run_test! do |response|
          expect(response.status).to eq(200)
        end
      end
    end
  end

  path '/api/messages' do
    get 'List messages' do
      tags 'messages'
      consumes 'application/json'

      parameter name: :params, in: :body, schema: {
        type: :object,
        properties: {

          messages: {
            type: :object,
            properties: {

              applicant_id: {
                type: :integer
              },

              text: {
                type: :text
              },

              attachment: {
                type: :string
              },

              reply_to_message_id: {
                type: :integer
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

          'messages' => 'ARRAY'

        }

        let(:resource) { create(:message) }
        let(:params) {}
        run_test! do |response|
          expect(response.status).to eq(200)
        end
      end
    end
  end
end
