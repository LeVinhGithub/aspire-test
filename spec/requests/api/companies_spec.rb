require 'swagger_helper'

RSpec.describe 'Company', type: :request do
  # jitera-hook-for-rswag-example
  path '/api/companies/id' do
    delete 'Destroy companies' do
      tags 'companies'
      consumes 'application/json'

      parameter name: id, in: :path, type: :string, description: 'Url Params'

      parameter name: :params, in: :body, schema: {
        type: :object,
        properties: {}
      }
      response '200', 'delete' do
        examples 'application/json' => {}

        let(:resource) { create(:company) }
        let(:id) { resource.id }
        run_test! do |response|
          expect(response.status).to eq(200)
        end
      end
    end
  end

  path '/api/companies/id' do
    put 'Update  companies' do
      tags 'companies'
      consumes 'application/json'

      parameter name: id, in: :path, type: :string, description: 'Url Params'

      parameter name: :params, in: :body, schema: {
        type: :object,
        properties: {

          companies: {
            type: :object,
            properties: {

              name: {
                type: :string
              },

              logo: {
                type: :string
              },

              location: {
                type: :string
              },

              year_founded: {
                type: :string
              },

              business_details: {
                type: :string
              },

              number_of_employees: {
                type: :integer
              },

              industry_id: {
                type: :integer
              },

              mission: {
                type: :text
              },

              vision: {
                type: :text
              },

              value: {
                type: :text
              },

              representative_photo: {
                type: :file
              },

              representative_profile: {
                type: :string
              },

              ipo: {
                type: :string
              },

              representative_name: {
                type: :string
              },

              slug: {
                type: :string
              },

              image: {
                type: :file
              },

              capital: {
                type: :string
              },

              business_id: {
                type: :string
              },

              name_furigana: {
                type: :string
              }

            }
          },

          restrictions: {
            type: :object,
            properties: {

              company_id: {
                type: :integer
              }

            }
          },

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
              }

            }
          },

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
              }

            }
          },

          company_employees: {
            type: :object,
            properties: {}
          }

        }
      }
      response '200', 'update' do
        examples 'application/json' => {

          'company' => {

            'id' => 'INTEGER',

            'created_at' => 'DATETIME',

            'updated_at' => 'DATETIME',

            'name' => 'STRING',

            'company_users' => 'ARRAY',

            'company_id' => 'INTEGER',

            'logo' => 'FILE',

            'location' => 'STRING',

            'launched_year' => 'STRING',

            'business_details' => 'TEXT',

            'number_of_employees' => 'INTEGER',

            'industry_id' => 'INTEGER',

            'mission' => 'TEXT',

            'vision' => 'TEXT',

            'representative_photo' => 'FILE',

            'representative_profile' => 'TEXT',

            'ipo' => 'ENUM',

            'value' => 'TEXT',

            'job_openings' => 'ARRAY',

            'company_id' => 'INTEGER',

            'logo' => 'FILE',

            'business_details' => 'TEXT',

            'representative_profile' => 'TEXT',

            'representative_name' => 'STRING',

            'company_id' => 'INTEGER',

            'messages' => 'ARRAY',

            'slug' => 'STRING',

            'restrictions' => 'ARRAY',

            'industry' => {

              'id' => 'INTEGER',

              'created_at' => 'DATETIME',

              'updated_at' => 'DATETIME',

              'name' => 'STRING',

              'companies' => 'ARRAY'

            },

            'image' => 'FILE',

            'capital' => 'STRING',

            'company_employees' => 'ARRAY',

            'ipo' => 'BOOLEAN',

            'business_id' => 'STRING',

            'name_furigana' => 'STRING'

          },

          'error_object' => {}

        }

        let(:resource) { build(:company) }

        let(:params) { { companies: resource.attributes.to_hash } }

        let(:id) { resource.id }
        run_test! do |response|
          expect(response.status).to eq(200)
        end
      end
    end
  end
  path '/api/companies/id' do
    get 'Show companies' do
      tags 'companies'
      consumes 'application/json'

      parameter name: id, in: :path, type: :string, description: 'Url Params'

      parameter name: :params, in: :body, schema: {
        type: :object,
        properties: {}
      }
      response '200', 'show' do
        examples 'application/json' => {

          'company' => {

            'id' => 'INTEGER',

            'created_at' => 'DATETIME',

            'updated_at' => 'DATETIME',

            'name' => 'STRING',

            'company_users' => 'ARRAY',

            'company_id' => 'INTEGER',

            'logo' => 'FILE',

            'location' => 'STRING',

            'launched_year' => 'STRING',

            'business_details' => 'TEXT',

            'number_of_employees' => 'INTEGER',

            'industry_id' => 'INTEGER',

            'mission' => 'TEXT',

            'vision' => 'TEXT',

            'representative_photo' => 'FILE',

            'representative_profile' => 'TEXT',

            'ipo' => 'ENUM',

            'value' => 'TEXT',

            'job_openings' => 'ARRAY',

            'company_id' => 'INTEGER',

            'logo' => 'FILE',

            'business_details' => 'TEXT',

            'representative_profile' => 'TEXT',

            'representative_name' => 'STRING',

            'company_id' => 'INTEGER',

            'messages' => 'ARRAY',

            'slug' => 'STRING',

            'restrictions' => 'ARRAY',

            'industry' => {

              'id' => 'INTEGER',

              'created_at' => 'DATETIME',

              'updated_at' => 'DATETIME',

              'name' => 'STRING',

              'companies' => 'ARRAY'

            },

            'image' => 'FILE',

            'capital' => 'STRING',

            'company_employees' => 'ARRAY',

            'ipo' => 'BOOLEAN',

            'business_id' => 'STRING',

            'name_furigana' => 'STRING',

            'scout_templates' => 'ARRAY',

            'target_lists' => 'ARRAY',

            'recruitment_notes' => 'ARRAY'

          }

        }

        let(:resource) { create(:company) }
        let(:id) { resource.id }
        run_test! do |response|
          expect(response.status).to eq(200)
        end
      end
    end
  end

  path '/api/companies' do
    post 'Create companies' do
      tags 'companies'
      consumes 'application/json'

      parameter name: :params, in: :body, schema: {
        type: :object,
        properties: {

          companies: {
            type: :object,
            properties: {

              name: {
                type: :string
              },

              logo: {
                type: :file
              },

              location: {
                type: :string
              },

              year_founded: {
                type: :string
              },

              business_details: {
                type: :string
              },

              number_of_employees: {
                type: :integer
              },

              industry_id: {
                type: :integer
              },

              mission: {
                type: :text
              },

              vision: {
                type: :text
              },

              value: {
                type: :text
              },

              representative_photo: {
                type: :file
              },

              representative_profile: {
                type: :string
              },

              ipo: {
                type: :string
              },

              representative_name: {
                type: :string
              },

              slug: {
                type: :string
              },

              image: {
                type: :file
              },

              capital: {
                type: :string
              },

              business_id: {
                type: :string
              },

              name_furigana: {
                type: :string
              }

            }
          },

          restrictions: {
            type: :object,
            properties: {

              company_id: {
                type: :integer
              }

            }
          },

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
              }

            }
          },

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
              }

            }
          },

          company_employees: {
            type: :object,
            properties: {}
          }

        }
      }
      response '200', 'create' do
        examples 'application/json' => {

          'company' => {

            'id' => 'INTEGER',

            'created_at' => 'DATETIME',

            'updated_at' => 'DATETIME',

            'name' => 'STRING',

            'company_users' => 'ARRAY',

            'logo' => 'FILE',

            'location' => 'STRING',

            'launched_year' => 'STRING',

            'business_details' => 'TEXT',

            'number_of_employees' => 'INTEGER',

            'industry_id' => 'INTEGER',

            'mission' => 'TEXT',

            'vision' => 'TEXT',

            'representative_photo' => 'FILE',

            'representative_profile' => 'TEXT',

            'ipo' => 'ENUM',

            'value' => 'TEXT',

            'job_openings' => 'ARRAY',

            'company_id' => 'INTEGER',

            'logo' => 'FILE',

            'business_details' => 'TEXT',

            'representative_profile' => 'TEXT',

            'representative_name' => 'STRING',

            'company_id' => 'INTEGER',

            'messages' => 'ARRAY',

            'slug' => 'STRING',

            'restrictions' => 'ARRAY',

            'industry' => {

              'id' => 'INTEGER',

              'created_at' => 'DATETIME',

              'updated_at' => 'DATETIME',

              'name' => 'STRING',

              'companies' => 'ARRAY'

            },

            'image' => 'FILE',

            'capital' => 'STRING',

            'company_employees' => 'ARRAY',

            'ipo' => 'BOOLEAN',

            'business_id' => 'STRING',

            'name_furigana' => 'STRING'

          },

          'error_object' => {}

        }

        let(:resource) { build(:company) }

        let(:params) { { companies: resource.attributes.to_hash } }

        run_test! do |response|
          expect(response.status).to eq(200)
        end
      end
    end
  end

  path '/api/companies' do
    get 'List companies' do
      tags 'companies'
      consumes 'application/json'

      parameter name: :params, in: :body, schema: {
        type: :object,
        properties: {

          companies: {
            type: :object,
            properties: {

              name: {
                type: :string
              },

              logo: {
                type: :string
              },

              location: {
                type: :string
              },

              year_founded: {
                type: :string
              },

              business_details: {
                type: :string
              },

              number_of_employees: {
                type: :integer
              },

              industry_id: {
                type: :integer
              },

              mission: {
                type: :text
              },

              vision: {
                type: :text
              },

              value: {
                type: :text
              },

              representative_photo: {
                type: :string
              },

              representative_profile: {
                type: :string
              },

              ipo: {
                type: :string
              },

              representative_name: {
                type: :string
              },

              slug: {
                type: :string
              },

              capital: {
                type: :string
              }

            }
          },

          pagination_page: {
            type: :page_number
          },

          pagination_limit: {
            type: :page_size
          },

          restrictions: {
            type: :object,
            properties: {

              company_id: {
                type: :integer
              }

            }
          },

          messages: {
            type: :object,
            properties: {

              applicant_id: {
                type: :integer
              },

              text: {
                type: :text
              },

              reply_to_message_id: {
                type: :integer
              }

            }
          },

          messages: {
            type: :object,
            properties: {

              applicant_id: {
                type: :integer
              },

              text: {
                type: :text
              },

              reply_to_message_id: {
                type: :integer
              }

            }
          },

          company_employees: {
            type: :object,
            properties: {}
          }

        }
      }
      response '200', 'filter' do
        examples 'application/json' => {

          'total_pages' => 'INTEGER',

          'companies' => 'ARRAY'

        }

        let(:resource) { create(:company) }
        let(:params) {}
        run_test! do |response|
          expect(response.status).to eq(200)
        end
      end
    end
  end
end
