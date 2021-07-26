import React from "react";
import GoogleLogin from "react-google-login";
import { useHistory } from "react-router-dom";

const Auth = () => {
  const history = useHistory();

  const handleSubmit = (e:any) => {
    e.preventDefault();
  };

  const googleSuccess = async (res: any) => {
    const result = res?.profileObj;
    const token = res?.tokenId;

    localStorage.setItem('profile', JSON.stringify({ result, token }));

    try {
      history.push("/");
    } catch (e) {
      console.log(e);
    }
  };

  const googleFailure = (error: any) => {
    console.log("GOOGLE FAILURE", error);
  };

  return(
    <div>
      <form onSubmit={handleSubmit}>
          <GoogleLogin
            clientId="694141851748-ha0pnc5isi94s5f0va5es3c5o1cfrlve.apps.googleusercontent.com"
            render={(renderProps) => (
              <button
                onClick={renderProps.onClick}
                disabled={renderProps.disabled || false}
                style={{marginTop:'6px'}}
                type="button"
              >
                Google Sign In
              </button>
            )}
            onSuccess={googleSuccess}
            onFailure={googleFailure}
            cookiePolicy="single_host_origin"
          />
        </form>
    </div>
  )
}

export default Auth;