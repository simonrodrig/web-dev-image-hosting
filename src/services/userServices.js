import Parse from './initParse';

// Requests full name from username
export async function getFullName(username) {
    // const resp = await axios.get('./services/data.json');
    // const user = resp.data.users[username];
    // return {first_name : user.first_name, last_name : user.last_name};

  /**
   * TODO: Implement for Feature 5
   *      For now just implemented two users, this will be a service like 
   *      the others
   */
    return (username == 'srodrig9')
        ? {first_name: 'Simon', last_name: 'Rodriguez'}
        : {first_name: 'Gerry', last_name: 'Fernandez'};

}

// Gets the id from the username, which is used throughout the app
export async function getIdFromUsername(username) {

    // Query against the 'username' field
    const query = new Parse.Query(Parse.User);
    query.equalTo('username', username);

    const data = await query.find();

    if (data[0] === undefined || data[0].id === undefined)
        throw new Error('That particular user could not be found in the database!');

    // return the built in id property
    return data[0].id;
}