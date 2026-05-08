type userRole = "admin"| "guest" | "visitor";

const Dashboard =(role: userRole)=>{
    if(role === "admin"){
        return "Admin Dashboard"
    }
    else if(role === "guest"){
        return "Guest Dashboard"
    }
    else{
        return "Visitor Dashboard"
    }
}