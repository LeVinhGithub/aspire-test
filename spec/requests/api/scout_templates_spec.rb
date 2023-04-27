require 'swagger_helper'

RSpec.describe 'ScoutTemplate', type: :request do
  # jitera-hook-for-rswag-example
  path '/api/scout_templates/id' do
    delete 'Destroy scout_templates' do
      tags 'scout_templates'
      consumes 'application/json'

      parameter name: id, in: :path, type: :string, description: 'Url Params'

      parameter name: :params, in: :body, schema: {
        type: :object,
        properties: {}
      }
      response '200', 'delete' do
        examples 'application/json' => {}

        let(:resource) { create(:scout_template) }
        let(:id) { resource.id }
        run_test! do |response|
          expect(response.status).to eq(200)
        end
      end
    end
  end

  path '/api/scout_templates/id' do
    put 'Update  scout_templates' do
      tags 'scout_templates'
      consumes 'application/json'

      parameter name: id, in: :path, type: :string, description: 'Url Params'

      parameter name: :params, in: :body, schema: {
        type: :object,
        properties: {

          scout_templates: {
            type: :object,
            properties: {

              title: {
                type: :string
              },

              template_text: {
                type: :text
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

          'scout_template' => {

            'id' => 'INTEGER',

            'created_at' => 'DATETIME',

            'updated_at' => 'DATETIME',

            'title' => 'STRING',

            'template_text' => 'TEXT',

            'company_id' => 'INTEGER'

          },

          'error_object' => {}

        }

        let(:resource) { build(:scout_template) }

        let(:params) { { scout_templates: resource.attributes.to_hash } }

        let(:id) { resource.id }
        run_test! do |response|
          expect(response.status).to eq(200)
        end
      end
    end
  end
  path '/api/scout_templates/id' do
    get 'Show scout_templates' do
      tags 'scout_templates'
      consumes 'application/json'

      parameter name: id, in: :path, type: :string, description: 'Url Params'

      parameter name: :params, in: :body, schema: {
        type: :object,
        properties: {}
      }
      response '200', 'show' do
        examples 'application/json' => {

          'scout_template' => {

            'id' => 'INTEGER',

            'created_at' => 'DATETIME',

            'updated_at' => 'DATETIME',

            'title' => 'STRING',

            'template_text' => 'TEXT',

            'company_id' => 'INTEGER'

          }

        }

        let(:resource) { create(:scout_template) }
        let(:id) { resource.id }
        run_test! do |response|
          expect(response.status).to eq(200)
        end
      end
    end
  end

  path '/api/scout_templates' do
    post 'Create scout_templates' do
      tags 'scout_templates'
      consumes 'application/json'

      parameter name: :params, in: :body, schema: {
        type: :object,
        properties: {

          scout_templates: {
            type: :object,
            properties: {

              title: {
                type: :string
              },

              template_text: {
                type: :text
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

          'scout_template' => {

            'id' => 'INTEGER',

            'created_at' => 'DATETIME',

            'updated_at' => 'DATETIME',

            'title' => 'STRING',

            'template_text' => 'TEXT',

            'company_id' => 'INTEGER'

          },

          'error_object' => {}

        }

        let(:resource) { build(:scout_template) }

        let(:params) { { scout_templates: resource.attributes.to_hash } }

        run_test! do |response|
          expect(response.status).to eq(200)
        end
      end
    end
  end

  path '/api/scout_templates' do
    get 'List scout_templates' do
      tags 'scout_templates'
      consumes 'application/json'

      parameter name: :params, in: :body, schema: {
        type: :object,
        properties: {

          scout_templates: {
            type: :object,
            properties: {

              title: {
                type: :string
              },

              template_text: {
                type: :text
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

          'scout_templates' => 'ARRAY'

        }

        let(:resource) { create(:scout_template) }
        let(:params) {}
        run_test! do |response|
          expect(response.status).to eq(200)
        end
      end
    end
  end
end
