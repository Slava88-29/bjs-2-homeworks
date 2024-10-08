function compareArrays(arr1, arr2) {

  if (arr1.length!=arr2.length){
    return false;
  }
  return arr1.every((value,index)=>value===arr2[index]);
}

function getUsersNamesInAgeRange(users, gender) {

    let usersFilter = users.filter(user=>user.gender===gender);
    if (usersFilter.length==0){
        return 0;
    }
    let result = usersFilter.map(user=>user.age).reduce((sum,age)=>sum+age,0)/usersFilter.length;

    return result;
}