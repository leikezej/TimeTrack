const otpGenerator = require("otp-generator");
const crypto       = require("crypto");
const key          = "fuckyou123!"; // Key for cryptograpy. Keep it secret

function createNewOTP(phone){
    // Generate a 6 digit numeric OTP
    const otp      = otpGenerator.generate(6, {alphabets: false, upperCase: false, specialChars: false});
    const ttl      = 5 * 60 * 1000; //5 Minutes in miliseconds
    const expires  = Date.now() + ttl; //timestamp to 5 minutes in the future
    const data     = `${phone}.${otp}.${expires}`; // phone.otp.expiry_timestamp
    const hash     = crypto.createHmac("sha256",key).update(data).digest("hex"); // creating SHA256 hash of the data
    const fullHash = `${hash}.${expires}`; // Hash.expires, format to send to the user
    // const phone = "88017009090";  
    // const otp   = otpGen.generate(6, { upperCase: false, specialChars: false, alphabets: false });  
    // you have to implement the function to send SMS yourself. For demo purpose. let's assume it's called sendSMS
    sendSMS(phone,`Your OTP is ${otp}. it will expire in 5 minutes`);
    return fullHash;
}

function verifyOTP(phone,hash,otp){

    
    // let hash = otpTool.createNewOTP(phone,otp,key);
    // Seperate Hash value and expires from the hash returned from the user
    let [hashValue,expires] = hash.split(".");
    // Check if expiry time has passed
    let now = Date.now();
    if(now>parseInt(expires)) return false;
    // Calculate new hash with the same key and the same algorithm
    let data  = `${phone}.${otp}.${expires}`;
    let newCalculatedHash = crypto.createHmac("sha256",key).update(data).digest("hex");
    // Match the hashes
    if(newCalculatedHash === hashValue){
        return true;
    } 
    return false;
}

