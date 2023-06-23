import axios from "axios";


const url='http://localhost:8080/';

 class VerificationService {

    verify(code){
        return axios.post(url+'verify',code);
    }

    requestForResend(){
        return axios.get(url+'resend');
    }
    
}
export default new VerificationService