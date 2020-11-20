const errorType = {
    USER_NOT_EXIST : {
        message : 'This User is unregistered',
        status : 404,
    },
    USER_NOT_FOUND : {
        message : 'This user is not found',
        status : 404,
    },
    EMAIL_DUPLICATE : {
        message : 'Email Already Used',
        status : 403,
    },
    EMAIL_ALREADY_EXIST : {
        statusCode : 403,
        message : 'Email Already Exist',
    },
    EMAIL_NOT_VALID : {
        message : 'Email is not valid',
        statusCode : 403,
    },
    VERIFY_EMAIL : {
        message : 'Please verify your email',
        statusCode : 403,
    },
    PASSWORD_NOT_MATCH : {
        message : "Password Doesn't match",
        statusCode : 403
    }
}



const graphqlError =  (errorMsg ) => {
  console.log(errorMsg);
  const dupEmail = errorMsg.match(/\bdup\s\bkey/i);
  if(dupEmail) return errorType.EMAIL_DUPLICATE;
  const error = errorType[errorMsg];
  console.log(error);
  return error;
}

module.exports = {
    graphqlError,
}