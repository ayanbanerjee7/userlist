describe('Testing Users List Services', function() {
 describe('UserServices', function(){
  var UserServices;
  var userList = [
      {
        "id": 0,
        "firstName": "Margret",
        "lastName": "Boyd",
        "age": 20,
        "email": "margretboyd@schoolio.com",
        "isActive": false,
        "createdOn": "2013-10-28 07:48:31 AM",
        "lastEdited": "2014-11-29 05:01:50 AM"
      },
      {
        "id": 1,
        "firstName": "Paige",
        "lastName": "Stone",
        "age": 23,
        "email": "paigestone@schoolio.com",
        "isActive": false,
        "createdOn": "2013-02-13 07:48:42 AM",
        "lastEdited": "2014-11-18 09:00:05 AM"
      },
      {
        "id": 2,
        "firstName": "Karina",
        "lastName": "Vaughn",
        "age": 36,
        "email": "karinavaughn@schoolio.com",
        "isActive": true,
        "createdOn": "2014-02-10 05:53:27 AM",
        "lastEdited": "2015-11-10 06:05:26 AM"
      },
      {
        "id": 3,
        "firstName": "Marcie",
        "lastName": "Rosales",
        "age": 25,
        "email": "marcierosales@schoolio.com",
        "isActive": false,
        "createdOn": "2014-05-29 03:22:44 AM",
        "lastEdited": "2015-09-20 03:54:49 AM"
      },
      {
        "id": 4,
        "firstName": "Stokes",
        "lastName": "Mays",
        "age": 34,
        "email": "stokesmays@schoolio.com",
        "isActive": false,
        "createdOn": "2013-08-30 08:53:05 AM",
        "lastEdited": "2014-08-09 10:26:12 AM"
      },
      {
        "id": 5,
        "firstName": "Wendy",
        "lastName": "Short",
        "age": 22,
        "email": "wendyshort@schoolio.com",
        "isActive": false,
        "createdOn": "2014-02-13 12:33:26 AM",
        "lastEdited": "2015-02-02 01:57:26 AM"
      },
      {
        "id": 6,
        "firstName": "Margery",
        "lastName": "Crosby",
        "age": 27,
        "email": "margerycrosby@schoolio.com",
        "isActive": true,
        "createdOn": "2014-10-13 03:29:34 AM",
        "lastEdited": "2015-12-21 01:50:54 AM"
      },
      {
        "id": 7,
        "firstName": "Pugh",
        "lastName": "Frederick",
        "age": 37,
        "email": "pughfrederick@schoolio.com",
        "isActive": true,
        "createdOn": "2013-06-10 10:19:21 AM",
        "lastEdited": "2014-09-25 05:51:41 AM"
      },
      {
        "id": 8,
        "firstName": "Bonita",
        "lastName": "Perez",
        "age": 21,
        "email": "bonitaperez@schoolio.com",
        "isActive": true,
        "createdOn": "2016-03-25 06:52:48 AM",
        "lastEdited": "2016-04-08 11:34:38 AM"
      },
      {
        "id": 9,
        "firstName": "Dunlap",
        "lastName": "Rosa",
        "age": 21,
        "email": "dunlaprosa@schoolio.com",
        "isActive": false,
        "createdOn": "2014-10-30 08:32:39 AM",
        "lastEdited": "2015-10-13 10:17:50 AM"
      },
      {
        "id": 10,
        "firstName": "Morris",
        "lastName": "Leblanc",
        "age": 32,
        "email": "morrisleblanc@schoolio.com",
        "isActive": false,
        "createdOn": "2015-11-20 05:06:28 AM",
        "lastEdited": "2016-03-11 12:01:52 AM"
      },
      {
        "id": 11,
        "firstName": "Hodges",
        "lastName": "Gill",
        "age": 33,
        "email": "hodgesgill@schoolio.com",
        "isActive": true,
        "createdOn": "2015-09-01 09:17:27 AM",
        "lastEdited": "2016-05-14 04:16:06 AM"
      },
      {
        "id": 12,
        "firstName": "Cecelia",
        "lastName": "Doyle",
        "age": 20,
        "email": "ceceliadoyle@schoolio.com",
        "isActive": false,
        "createdOn": "2014-10-30 12:51:12 AM",
        "lastEdited": "2015-01-31 06:14:47 AM"
      },
      {
        "id": 13,
        "firstName": "Marci",
        "lastName": "Mayo",
        "age": 29,
        "email": "marcimayo@schoolio.com",
        "isActive": false,
        "createdOn": "2014-05-14 11:35:34 AM",
        "lastEdited": "2015-02-06 03:59:32 AM"
      },
      {
        "id": 14,
        "firstName": "Snider",
        "lastName": "Grant",
        "age": 39,
        "email": "snidergrant@schoolio.com",
        "isActive": true,
        "createdOn": "2014-03-24 10:49:41 AM",
        "lastEdited": "2016-09-29 10:31:44 AM"
      },
      {
        "id": 15,
        "firstName": "Wyatt",
        "lastName": "Gallagher",
        "age": 21,
        "email": "wyattgallagher@schoolio.com",
        "isActive": true,
        "createdOn": "2014-04-14 08:19:10 AM",
        "lastEdited": "2015-10-14 12:26:20 AM"
      },
      {
        "id": 16,
        "firstName": "Aline",
        "lastName": "Leonard",
        "age": 23,
        "email": "alineleonard@schoolio.com",
        "isActive": true,
        "createdOn": "2016-06-19 02:48:05 AM",
        "lastEdited": "2016-11-05 10:16:33 AM"
      },
      {
        "id": 17,
        "firstName": "Lynch",
        "lastName": "Alston",
        "age": 32,
        "email": "lynchalston@schoolio.com",
        "isActive": false,
        "createdOn": "2015-09-19 07:38:58 AM",
        "lastEdited": "2015-10-21 04:51:54 AM"
      },
      {
        "id": 18,
        "firstName": "Clara",
        "lastName": "Neal",
        "age": 32,
        "email": "claraneal@schoolio.com",
        "isActive": false,
        "createdOn": "2014-08-11 04:26:24 AM",
        "lastEdited": "2016-04-06 12:09:50 AM"
      },
      {
        "id": 19,
        "firstName": "David",
        "lastName": "Watkins",
        "age": 24,
        "email": "davidwatkins@schoolio.com",
        "isActive": false,
        "createdOn": "2014-04-29 05:13:22 AM",
        "lastEdited": "2016-02-13 09:25:13 AM"
      },
      {
        "id": 20,
        "firstName": "Allison",
        "lastName": "Christian",
        "age": 24,
        "email": "allisonchristian@schoolio.com",
        "isActive": true,
        "createdOn": "2016-07-03 10:18:15 AM",
        "lastEdited": "2014-01-25 12:00:16 AM"
      },
      {
        "id": 21,
        "firstName": "Emilia",
        "lastName": "Waters",
        "age": 36,
        "email": "emiliawaters@schoolio.com",
        "isActive": false,
        "createdOn": "2014-09-27 09:43:42 AM",
        "lastEdited": "2015-04-16 04:02:33 AM"
      },
      {
        "id": 22,
        "firstName": "April",
        "lastName": "Hubbard",
        "age": 20,
        "email": "aprilhubbard@schoolio.com",
        "isActive": true,
        "createdOn": "2014-10-10 05:24:57 AM",
        "lastEdited": "2015-07-06 01:39:25 AM"
      }
    ];
  var singleUser = {
        "id": 6,
        "firstName": "Margery",
        "lastName": "Crosby",
        "age": 27,
        "email": "margerycrosby@schoolio.com",
        "isActive": true,
        "createdOn": "2014-10-13 03:29:34 AM",
        "lastEdited": "2015-12-21 01:50:54 AM"
      };
  var newUser = {
        "firstName": "Ayab",
        "lastName": "Banerjee",
        "age": 27,
        "email": "ayan.john@gmail.com",
        "isActive": true
      };    

  beforeEach(angular.mock.module('userListApp'));

  beforeEach(
    inject(function(_UserServices_) {
    UserServices = _UserServices_;
  }));

  it('should exist as', function() {
    expect(UserServices).toBeDefined();
  });

  describe('.GetAll()', function() {
    it('GetAll function should exist', function() {
      expect(UserServices.GetAll()).toBeDefined();
    });

    it('should return a hard-coded list of users', function() {
        localStorage.removeItem('users');
      expect(UserServices.GetAll()).toEqual(userList);
    });
    
    it('total number of hard-coded list of users should be 23', function() {
        localStorage.removeItem('users');
      expect(UserServices.GetAll().length).toBe(23);
    });  
      
  });

  describe('.GetByEmail()', function() {
    it('should exist', function() {
      expect(UserServices.GetByEmail).toBeDefined();
    });

    it('should return one user object if it exists', function() {
      expect(UserServices.GetByEmail('margerycrosby@schoolio.com')).toEqual(singleUser);
    });

    it('should return null if the user cannot be found', function() {
      expect(UserServices.GetByEmail('ABC')).toBeNull();
    });
    it('should return null when user email and id both match', function() {
      expect(UserServices.GetByEmail('margerycrosby@schoolio.com',6)).toBeNull();
    });
    it('should return null if the user email and id both did not match', function() {
      expect(UserServices.GetByEmail('ABC',2)).toBeNull();
    });  
    it('should return one user when user email match but id did not match', function() {
      expect(UserServices.GetByEmail('margerycrosby@schoolio.com',2)).toEqual(singleUser);
    });
    it('should return null when user id match but email did not match', function() {
      expect(UserServices.GetByEmail('margerycrosby',6)).toBeNull();
    });  
  });
  describe('.Create()', function() {
    it('should exist', function() {
      expect(UserServices.Create).toBeDefined();
    });
    it('should add new user to userList', function() {
        UserServices.Create(newUser);
       expect(UserServices.GetByEmail('ayan.john@gmail.com')).not.toBeNull();
    }); 
      
    it('total number of list of users should be 24 after new add', function() {
      expect(UserServices.GetAll().length).toBe(24);
    });   
      
    it('should not add new user to userList,with duplicate email', function() {
       expect(UserServices.Create(newUser)).toBeTruthy();
    });  


  });      
  describe('.Update()', function() {
    it('should exist', function() {
      expect(UserServices.Update).toBeDefined();
    });
      
    it('should update age existing user to userList', function() {
        var updateUser = UserServices.GetByEmail('ayan.john@gmail.com');
        updateUser.age = 90;
        UserServices.Update(updateUser);
       expect(UserServices.GetByEmail('ayan.john@gmail.com').age).toBe(90);
    });
    
    it('should update firstName, lastName , active/inactive existing user to userList', function() {
        var updateUser = UserServices.GetByEmail('ayan.john@gmail.com');
        updateUser.firstName = "John";
        updateUser.lastName = "Smith";
        updateUser.isActive = false;
        UserServices.Update(updateUser);
        var modifiedUser = UserServices.GetByEmail('ayan.john@gmail.com');
        expect(modifiedUser.firstName).toBe("John");
        expect(modifiedUser.lastName).toBe("Smith");
        expect(modifiedUser.isActive).toBeFalsy();
    });
      
    it('total number of list of users should be 24 after update existing user', function() {
      expect(UserServices.GetAll().length).toBe(24);
    });  
      
    it('should not update email of user to userList,with duplicate email of others', function() {
        var updateUser = UserServices.GetByEmail('ayan.john@gmail.com');
        updateUser.email = 'emiliawaters@schoolio.com';
       expect(UserServices.Update(updateUser)).toBeTruthy();
    });  
  });   
  describe('.Delete()', function() {
    it('should exist', function() {
      expect(UserServices.Delete).toBeDefined();
    });
      
    it('should delete existing user from userList', function() {
        UserServices.Delete(6);
       expect(UserServices.GetByEmail('margerycrosby@schoolio.com')).toBeNull();
    });
    
    it('total number of list of users should be now 23 after new add', function() {
      expect(UserServices.GetAll().length).toBe(23);
    });   
      
  });   
 });
});