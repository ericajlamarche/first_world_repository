angular.module('contactApp', [])

.controller ('controller', function ($scope) {

  $scope.contacts = [
    {
      name: "Daniel L. Bertuca",
      address: "116 Lockwood Memorial Library, North Campus",
      phone: "(716) 645-1332",
      email: "dbertuca@buffalo.edu"
    },

    {
      name: "Mary Beth Betzold",
      address: "222A Lockwood Memorial Library, North Campus",
      phone: "(716) 645-8589",
      email: "betzold@buffalo.edu"
    },
    {
      name: "Anne M. Bouvier",
      address: "234 Lockwood Memorial Library, North Campus",
      phone: "(716) 645-6943",
      email: "bouvier@buffalo.edu"
    },
    {
      name: "Jessica L. Bright",
      address: "427 Capen Hall, North Campus",
      phone: "(716) 645-1361",
      email: "jlbright@buffalo.edu"
    }
  ]
})
