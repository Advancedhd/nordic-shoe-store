export function getErrorDetails(r, passwError, emailError) {
  if (r.message[0].messages[0].message.includes("password")) {
    return log("error", r.message[0].messages[0].message, passwError);
  } else {
    return log("error", r.message[0].messages[0].message, emailError);
  }
}
