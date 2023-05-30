import axios from "axios";


const url='http://localhost:8080/';

 class MenuService {
    getMenusByBranchId(id){ 
        return axios.get(url + "menus/"+id);    
      }

      getMenusById(id){ 
        return axios.get(url + "menu/"+id);    
      }

    
    
    
}
export default new MenuService