
import { serviceFetch } from "@utils/service";
import { getRoute } from "@utils/route";
import { QueryFunctionContext } from "react-query";
import { DefaultQueryKey } from "@interfaces/query";
import { SchoolTypeModel } from "@models/schoolType";
import { ApplicantSchoolModel } from "@models/applicantSchool";


    
    export const DefaultFilterSchoolTypeQueryKey:[string, string, string] = ["SchoolType", "filter", "/api/school_types"];    
    

  export type FilterSchoolTypeRequestBody = {
    school_types: {
        name?: string;

      };
pagination_page?: number;
pagination_limit?: number;
  };

  export type FilterSchoolTypeResponseBody = {
    total_pages: number;
school_types: (SchoolTypeModel & { applicant_schools: ApplicantSchoolModel[];
 })[];
  };

    
    
    export const filterSchoolTypeApi = async (
      context: QueryFunctionContext<DefaultQueryKey<Partial<FilterSchoolTypeRequestBody> | undefined>>      
    ): Promise<FilterSchoolTypeResponseBody> => {
      return serviceFetch({
        url: getRoute("/api/school_types", context.queryKey[3]),
        params: context.queryKey[3] || {},
        method: "GET",
      });
    };
    



  
