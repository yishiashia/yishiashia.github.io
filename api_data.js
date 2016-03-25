define({ "api": [
  {
    "version": "1.0.0",
    "type": "post",
    "url": "/eattogether/account/register",
    "title": "Register an account.",
    "name": "RegisterMember",
    "group": "Account",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Resource owner's access token.</p>"
          },
          {
            "group": "Parameter",
            "type": "JSON",
            "optional": false,
            "field": "profile",
            "description": "<p>User's register profile.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "profile:uname",
            "description": "<p>Register user name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "profile:email",
            "description": "<p>Register user's email.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "profile:password",
            "description": "<p>Register user's password.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "profile:fb_uid",
            "description": "<p>Register user's facebook uid(blank when user doesn't register with facebook).</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>Query result(success/fail).</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": "<p>Code of API access result.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_description",
            "description": "<p>Error message.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\nContent-Type: application/json; charset=utf-8\n\n{\n    \"result\":\"success\",\n    \"code\":200\n}",
          "type": "json"
        }
      ]
    },
    "header": {
      "examples": [
        {
          "title": "Register-Normal:",
          "content": "POST /eattogether/account/register HTTP/1.1\nHost: api.hangaround.tw\nAccept: * / *\nContent-Type: application/x-www-form-urlencoded\n\nprofile={\"uname\":\"user1\",\"email\":\"username@somedomain.com\",\"password\":\"somepassword\",\"fb_uid\":\"\"}\n&access_token=d5768df446cc325b3d08aa861f675d9f4b5486a7",
          "type": "json"
        },
        {
          "title": "Register-Facebook:",
          "content": "POST /eattogether/account/register HTTP/1.1\nHost: api.hangaround.tw\nAccept: * / *\nContent-Type: application/x-www-form-urlencoded\n\nprofile={\"uname\":\"user1\",\"email\":\"1400567890123123@hangaround.tw\",\"password\":\"somepassword\",\"fb_uid\":\"1400567890123123\"}\n&access_token=d5768df446cc325b3d08aa861f675d9f4b5486a7",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "HTTP Status Code": [
          {
            "group": "HTTP Status Code",
            "optional": false,
            "field": "HTTP-200",
            "description": "<p>Register fail but login success.</p>"
          },
          {
            "group": "HTTP Status Code",
            "optional": false,
            "field": "HTTP-401",
            "description": "<p>Unauthorized access.</p>"
          },
          {
            "group": "HTTP Status Code",
            "optional": false,
            "field": "HTTP-500",
            "description": "<p>Internal Server Error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "[HTTP-200] Error-Response:",
          "content": "HTTP/1.1 200 OK\nContent-Type: application/json; charset=utf-8\n\n{\n    \"result\":\"fail\",\n    \"code\":201,\n    \"error_description\":\"Register fail but login success\"\n}",
          "type": "json"
        },
        {
          "title": "[HTTP-401] Error-Response:",
          "content": "HTTP/1.1 401 Unauthorized",
          "type": "json"
        },
        {
          "title": "[HTTP-500] Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n\n{\n    \"result\":\"fail\",\n    \"code\":5xx,\n    \"error_description\":\"some error message\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/account.php",
    "groupTitle": "Account"
  },
  {
    "version": "1.0.0",
    "type": "post",
    "url": "/eattogether/activity/invite",
    "title": "Invite friend to this activity.",
    "name": "ActivityInvite",
    "group": "Activity",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "Invite",
            "description": "<p>friends' id.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "Activity",
            "description": "<p>id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Resource owner's access token.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>Query result(success/fail).</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": "<p>Code of API access result.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_description",
            "description": "<p>Error message.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\nContent-Type: application/json; charset=utf-8\n\n{\n    \"result\":\"success\",\n    \"code\":200\n}",
          "type": "json"
        }
      ]
    },
    "header": {
      "examples": [
        {
          "title": "Header-Example:",
          "content": "POST /eattogether/activity/invite HTTP/1.1\nHost: api.hangaround.tw\nAccept: * / *\nContent-Type: application/x-www-form-urlencoded\n\nfids=[3,12,34]&aid=43&access_token=d5768df446cc325b3d08aa861f675d9f4b5486a7",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "HTTP Status Code": [
          {
            "group": "HTTP Status Code",
            "optional": false,
            "field": "401",
            "description": "<p>Unauthorized access.</p>"
          },
          {
            "group": "HTTP Status Code",
            "optional": false,
            "field": "500",
            "description": "<p>Internal Server Error.</p>"
          }
        ],
        "HTTP-401": [
          {
            "group": "HTTP-401",
            "optional": false,
            "field": "code:501",
            "description": "<p>Unauthorized access.</p>"
          },
          {
            "group": "HTTP-401",
            "optional": false,
            "field": "code:502",
            "description": "<p>Unauthorized access.</p>"
          },
          {
            "group": "HTTP-401",
            "optional": false,
            "field": "code:503",
            "description": "<p>Unauthorized access.</p>"
          }
        ],
        "HTTP-500": [
          {
            "group": "HTTP-500",
            "optional": false,
            "field": "code:300",
            "description": "<p>Unknown exception.</p>"
          },
          {
            "group": "HTTP-500",
            "optional": false,
            "field": "code:302",
            "description": "<p>Invite nobody.</p>"
          },
          {
            "group": "HTTP-500",
            "optional": false,
            "field": "code:303",
            "description": "<p>No update.</p>"
          },
          {
            "group": "HTTP-500",
            "optional": false,
            "field": "code:305",
            "description": "<p>Invalid parameter.</p>"
          },
          {
            "group": "HTTP-500",
            "optional": false,
            "field": "code:398",
            "description": "<p>Unknown error.</p>"
          },
          {
            "group": "HTTP-500",
            "optional": false,
            "field": "code:399",
            "description": "<p>Unknown error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "[HTTP-401] Error-Response:",
          "content": "HTTP/1.1 401 Unauthorized",
          "type": "json"
        },
        {
          "title": "[HTTP-500] Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n\n{\n    \"result\":\"fail\",\n    \"code\":3xx,\n    \"error_description\":\"some error message\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/activity.php",
    "groupTitle": "Activity"
  },
  {
    "version": "1.0.0",
    "type": "post",
    "url": "/eattogether/activity/addcover",
    "title": "Upload activity cover.",
    "name": "AddActivityCover",
    "group": "Activity",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Binary",
            "optional": false,
            "field": "img",
            "description": "<p>The upload image binary data.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "aid",
            "description": "<p>Id of Activity which to upload cover.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>Query result(success/fail).</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": "<p>Code of API access result.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_description",
            "description": "<p>Error message.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\nContent-Type: application/json; charset=utf-8\n\n{\n    \"result\":\"success\",\n    \"code\":200\n}",
          "type": "json"
        }
      ]
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "HTTP-attribute",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Resource owner's access token.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "POST /eattogether/activity/addcover HTTP/1.1\nHost: api.hangaround.tw\nAccept: * / *\nAuthorization: Bearer d5768df446cc325b3d08aa861f675d9f4b5486a7\nContent-Type: multipart/form-data; boundary=----WebKitFormBoundaryePkpFF7tjBAqx29L\n\n------WebKitFormBoundaryePkpFF7tjBAqx29L\nContent-Disposition: form-data; name=\"aid\"\n\n15\n------WebKitFormBoundaryePkpFF7tjBAqx29L\nContent-Disposition: form-data; name=\"img\"; filename=\"activityphoto.png\"\nContent-Type: image/png\n\n[Binary Data]\n------WebKitFormBoundaryePkpFF7tjBAqx29L--",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "HTTP Status Code": [
          {
            "group": "HTTP Status Code",
            "optional": false,
            "field": "401",
            "description": "<p>Unauthorized access.</p>"
          },
          {
            "group": "HTTP Status Code",
            "optional": false,
            "field": "500",
            "description": "<p>Fail to upload cover.</p>"
          }
        ],
        "HTTP-401": [
          {
            "group": "HTTP-401",
            "optional": false,
            "field": "code:501",
            "description": "<p>Unauthorized access.</p>"
          },
          {
            "group": "HTTP-401",
            "optional": false,
            "field": "code:502",
            "description": "<p>Unauthorized access.</p>"
          }
        ],
        "HTTP-500": [
          {
            "group": "HTTP-500",
            "optional": false,
            "field": "code:300",
            "description": "<p>Unknown exception.</p>"
          },
          {
            "group": "HTTP-500",
            "optional": false,
            "field": "code:301",
            "description": "<p>Upload error.</p>"
          },
          {
            "group": "HTTP-500",
            "optional": false,
            "field": "code:302",
            "description": "<p>Fail to resize image.</p>"
          },
          {
            "group": "HTTP-500",
            "optional": false,
            "field": "code:303",
            "description": "<p>Fail to resize image.</p>"
          },
          {
            "group": "HTTP-500",
            "optional": false,
            "field": "code:304",
            "description": "<p>Fail to resize image.</p>"
          },
          {
            "group": "HTTP-500",
            "optional": false,
            "field": "code:305",
            "description": "<p>Invalid parameter.</p>"
          },
          {
            "group": "HTTP-500",
            "optional": false,
            "field": "code:306",
            "description": "<p>Fail to process image.</p>"
          },
          {
            "group": "HTTP-500",
            "optional": false,
            "field": "code:307",
            "description": "<p>Fail to process image.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "[401] Error-Response:",
          "content": "HTTP/1.1 401 Unauthorized\n\n{\n    \"result\":\"fail\",\n    \"code\":5xx,\n    \"error_description\":\"Unauthorized access\"\n}",
          "type": "json"
        },
        {
          "title": "[500] Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n\n{\n    \"result\":\"fail\",\n    \"code\":3xx,\n    \"error_description\":\"some error message\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/activity.php",
    "groupTitle": "Activity"
  },
  {
    "version": "1.0.0",
    "type": "post",
    "url": "/eattogether/activity/add",
    "title": "Create an activity.",
    "name": "AddOneActivity",
    "group": "Activity",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Resource owner's access token.</p>"
          },
          {
            "group": "Parameter",
            "type": "JSON",
            "optional": false,
            "field": "data",
            "description": "<p>Content about the activity.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "data:title",
            "description": "<p>The title of the activity.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "data:content",
            "description": "<p>The content of the activity.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "data:location_id",
            "description": "<p>The Activity location id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "data:location_name",
            "description": "<p>Activity location name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "data:starttime",
            "description": "<p>Activity start time.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "data:endtime",
            "description": "<p>Activity end time.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>Query result(success/fail).</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": "<p>Code of API access result.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_description",
            "description": "<p>Error message.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\nContent-Type: application/json; charset=utf-8\n\n{\n    \"result\":\"success\",\n    \"code\":200\n}",
          "type": "json"
        }
      ]
    },
    "header": {
      "examples": [
        {
          "title": "Add-Activity:",
          "content": "POST /eattogether/activity/add HTTP/1.1\nHost: api.hangaround.tw\nAccept: * / *\nContent-Type: application/x-www-form-urlencoded\n\ndata={\"title\":\"anytitle\",\"content\":\"any content\",\"location_id\":\"\",\"location_name\":\"any place\",\"starttime\":\"2016-01-28 14:24:23\",\"endtime\":\"\"}\n&access_token=d5768df446cc325b3d08aa861f675d9f4b5486a7",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "HTTP Status Code": [
          {
            "group": "HTTP Status Code",
            "optional": false,
            "field": "HTTP-401",
            "description": "<p>Unauthorized access.</p>"
          },
          {
            "group": "HTTP Status Code",
            "optional": false,
            "field": "HTTP-500",
            "description": "<p>Internal Server Error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "[HTTP-401] Error-Response:",
          "content": "HTTP/1.1 401 Unauthorized",
          "type": "json"
        },
        {
          "title": "[HTTP-500] Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n\n{\n    \"result\":\"fail\",\n    \"code\":5xx,\n    \"error_description\":\"some error message\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/activity.php",
    "groupTitle": "Activity"
  },
  {
    "version": "1.0.0",
    "type": "post",
    "url": "/eattogether/activity/answer/:ans",
    "title": "***Answer activity invitation.",
    "name": "AnswerActivityInvitation",
    "group": "Activity",
    "filename": "controllers/activity.php",
    "groupTitle": "Activity"
  },
  {
    "version": "1.0.0",
    "type": "post",
    "url": "/eattogether/activity/delete",
    "title": "Delete an activity.",
    "name": "DeleteActivity",
    "group": "Activity",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Resource owner's access token.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "aid",
            "description": "<p>Id of Activity which to be deleted.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>Query result(success/fail).</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": "<p>Code of API access result.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_description",
            "description": "<p>Error message.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\nContent-Type: application/json; charset=utf-8\n\n{\n    \"result\":\"success\",\n    \"code\":200\n}",
          "type": "json"
        }
      ]
    },
    "header": {
      "examples": [
        {
          "title": "Delete-Activity:",
          "content": "POST /eattogether/activity/delete HTTP/1.1\nHost: api.hangaround.tw\nAccept: * / *\nContent-Type: application/x-www-form-urlencoded\n\naid=12&access_token=d5768df446cc325b3d08aa861f675d9f4b5486a7",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "HTTP Status Code": [
          {
            "group": "HTTP Status Code",
            "optional": false,
            "field": "HTTP-401",
            "description": "<p>Unauthorized access.</p>"
          },
          {
            "group": "HTTP Status Code",
            "optional": false,
            "field": "HTTP-500",
            "description": "<p>Internal Server Error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "[HTTP-401] Error-Response:",
          "content": "HTTP/1.1 401 Unauthorized",
          "type": "json"
        },
        {
          "title": "[HTTP-500] Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n\n{\n    \"result\":\"fail\",\n    \"code\":3xx,\n    \"error_description\":\"some error message\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/activity.php",
    "groupTitle": "Activity"
  },
  {
    "version": "1.0.0",
    "type": "get",
    "url": "/eattogether/activity/cover/:filename",
    "title": "Get activity cover.",
    "name": "GetActivityCover",
    "group": "Activity",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "filename",
            "description": "<p>Activity cover image file name.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Binary",
            "optional": false,
            "field": "image",
            "description": "<p>Activity cover image.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\nContent-Type: image/jpeg\n\n[Binary Data]",
          "type": "json"
        }
      ]
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "HTTP-attribute",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Resource owner's access token.</p>"
          },
          {
            "group": "Header",
            "type": "HTTP-date",
            "optional": false,
            "field": "If-Modified-Since",
            "description": "<p>Check the file has not been modified since the time specified.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "GET /eattogether/activity/cover/p800/588dcfc31dca249c15483a63f2170654cf6874409101397fdab0c1afb44a37fa HTTP/1.1\nHost: api.hangaround.tw\nAccept: * / *\nAuthorization: Bearer d5768df446cc325b3d08aa861f675d9f4b5486a7\nIf-Modified-Since: Sat, 29 Oct 1994 19:43:31 GMT\nContent-Type: application/x-www-form-urlencoded",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "HTTP Status Code": [
          {
            "group": "HTTP Status Code",
            "optional": false,
            "field": "304",
            "description": "<p>The activity cover image was not modified.</p>"
          },
          {
            "group": "HTTP Status Code",
            "optional": false,
            "field": "403",
            "description": "<p>Forbidden to access the activity cover image.</p>"
          },
          {
            "group": "HTTP Status Code",
            "optional": false,
            "field": "404",
            "description": "<p>The activity cover image was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "[304] Error-Response:",
          "content": "HTTP/1.1 304 Not Modified",
          "type": "json"
        },
        {
          "title": "[403] Error-Response:",
          "content": "HTTP/1.1 403 Forbidden",
          "type": "json"
        },
        {
          "title": "[404] Error-Response:",
          "content": "HTTP/1.1 404 Not Found",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/activity.php",
    "groupTitle": "Activity"
  },
  {
    "version": "1.0.0",
    "type": "get",
    "url": "/eattogether/activity/photo/:filename",
    "title": "Get activity photo.",
    "name": "GetActivityPhoto",
    "group": "Activity",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "filename",
            "description": "<p>Activity photo image file name.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Binary",
            "optional": false,
            "field": "image",
            "description": "<p>Activity photo image.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\nContent-Type: image/jpeg\n\n[Binary Data]",
          "type": "json"
        }
      ]
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "HTTP-attribute",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Resource owner's access token.</p>"
          },
          {
            "group": "Header",
            "type": "HTTP-date",
            "optional": false,
            "field": "If-Modified-Since",
            "description": "<p>Check the file has not been modified since the time specified.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "GET /eattogether/activity/photo/p800/b675cb32ff1cc371ff09dd85d7ae6f487df7799a85e5f4dafa1e86380cf924eb/1 HTTP/1.1\nHost: api.hangaround.tw\nAccept: * / *\nAuthorization: Bearer d5768df446cc325b3d08aa861f675d9f4b5486a7\nIf-Modified-Since: Sat, 29 Oct 1994 19:43:31 GMT\nContent-Type: application/x-www-form-urlencoded",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "HTTP Status Code": [
          {
            "group": "HTTP Status Code",
            "optional": false,
            "field": "304",
            "description": "<p>The activity photo was not modified.</p>"
          },
          {
            "group": "HTTP Status Code",
            "optional": false,
            "field": "403",
            "description": "<p>Forbidden to access the activity photo.</p>"
          },
          {
            "group": "HTTP Status Code",
            "optional": false,
            "field": "404",
            "description": "<p>The activity photo was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "[304] Error-Response:",
          "content": "HTTP/1.1 304 Not Modified",
          "type": "json"
        },
        {
          "title": "[403] Error-Response:",
          "content": "HTTP/1.1 403 Forbidden",
          "type": "json"
        },
        {
          "title": "[404] Error-Response:",
          "content": "HTTP/1.1 404 Not Found",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/activity.php",
    "groupTitle": "Activity"
  },
  {
    "version": "1.0.0",
    "type": "post",
    "url": "/eattogether/activity/addmsg",
    "title": "Leave a activity message.",
    "name": "LeaveActivityMessage",
    "group": "Activity",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "aid",
            "description": "<p>Activity id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Message to leave.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Resource owner's access token.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>Query result(success/fail).</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": "<p>Code of API access result.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_description",
            "description": "<p>Error message.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\nContent-Type: application/json; charset=utf-8\n\n{\n    \"result\":\"success\",\n    \"code\":200\n}",
          "type": "json"
        }
      ]
    },
    "header": {
      "examples": [
        {
          "title": "Header-Example:",
          "content": "POST /eattogether/activity/addmsg HTTP/1.1\nHost: api.hangaround.tw\nAccept: * / *\nContent-Type: application/x-www-form-urlencoded\n\naid=12&msg=some_messages&access_token=d5768df446cc325b3d08aa861f675d9f4b5486a7",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "HTTP Status Code": [
          {
            "group": "HTTP Status Code",
            "optional": false,
            "field": "401",
            "description": "<p>Unauthorized access.</p>"
          },
          {
            "group": "HTTP Status Code",
            "optional": false,
            "field": "500",
            "description": "<p>Fail to leave message.</p>"
          }
        ],
        "HTTP-401": [
          {
            "group": "HTTP-401",
            "optional": false,
            "field": "code:501",
            "description": "<p>Unauthorized access.</p>"
          },
          {
            "group": "HTTP-401",
            "optional": false,
            "field": "code:502",
            "description": "<p>Unauthorized access.</p>"
          }
        ],
        "HTTP-500": [
          {
            "group": "HTTP-500",
            "optional": false,
            "field": "code:300",
            "description": "<p>Unknown exception.</p>"
          },
          {
            "group": "HTTP-500",
            "optional": false,
            "field": "code:301",
            "description": "<p>Empty message.</p>"
          },
          {
            "group": "HTTP-500",
            "optional": false,
            "field": "code:302",
            "description": "<p>Unknown member.</p>"
          },
          {
            "group": "HTTP-500",
            "optional": false,
            "field": "code:303",
            "description": "<p>Unknown activity.</p>"
          },
          {
            "group": "HTTP-500",
            "optional": false,
            "field": "code:305",
            "description": "<p>Invalid parameter.</p>"
          },
          {
            "group": "HTTP-500",
            "optional": false,
            "field": "code:399",
            "description": "<p>Other error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "[HTTP-401] Error-Response:",
          "content": "HTTP/1.1 401 Unauthorized",
          "type": "json"
        },
        {
          "title": "[HTTP-500] Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n\n{\n    \"result\":\"fail\",\n    \"code\":3xx,\n    \"error_description\":\"some error message\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/activity.php",
    "groupTitle": "Activity"
  },
  {
    "version": "1.0.0",
    "type": "get",
    "url": "/eattogether/activity/list",
    "title": "***List activities.",
    "name": "ListActivities",
    "group": "Activity",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "HTTP-attribute",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Resource owner's access token.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "GET /eattogether/activity/list HTTP/1.1\nHost: api.hangaround.tw\nAccept: * / *\nAuthorization: Bearer d5768df446cc325b3d08aa861f675d9f4b5486a7\nContent-Type: application/x-www-form-urlencoded",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>Query result(success/fail).</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": "<p>Code of API access result.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "count",
            "description": "<p>Number of results</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "results",
            "description": "<p>Query activity list results.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "results:id",
            "description": "<p>Activity id.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "results:userid",
            "description": "<p>Activity owner's id.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "results:username",
            "description": "<p>Activity owner's user name.</p>"
          },
          {
            "group": "Success 200",
            "type": "Url",
            "optional": false,
            "field": "results:headimg",
            "description": "<p>Activity owner's head image.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "results:title",
            "description": "<p>Activity title.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "results:content",
            "description": "<p>Activity description.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "results:num_of_friend",
            "description": "<p>Number of friend that can join this activity.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "results:num_of_guest",
            "description": "<p>Number of guest that can join this activity.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "results:activity_start_time",
            "description": "<p>Activity start time.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "results:activity_end_time",
            "description": "<p>Activity end time.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "results:location_id",
            "description": "<p>Activity location's id.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "results:location_name",
            "description": "<p>Activity location's name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "results:create_time",
            "description": "<p>Activity create time.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "results:activitycover",
            "description": "<p>Activity's cover image(null when image not exist).</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "results:activityphoto",
            "description": "<p>Activity's photos(null when no images exist).</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "results:activityphoto:id",
            "description": "<p>Activity photo's id.</p>"
          },
          {
            "group": "Success 200",
            "type": "Url",
            "optional": false,
            "field": "results:activityphoto:url",
            "description": "<p>Activity photo's url.</p>"
          },
          {
            "group": "Success 200",
            "type": "Url",
            "optional": false,
            "field": "results:activityphoto:thumbnail_url",
            "description": "<p>Activity photo's thumbnail url.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "results:invitees",
            "description": "<p>Activity's invitees.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "results:invitees:id",
            "description": "<p>Invitee's id.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "results:invitees:username",
            "description": "<p>Invitee's username.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "results:invitees:email",
            "description": "<p>Invitee's email.</p>"
          },
          {
            "group": "Success 200",
            "type": "Url",
            "optional": false,
            "field": "results:invitees:headimg",
            "description": "<p>Invitee's head image url(null when image not exist).</p>"
          },
          {
            "group": "Success 200",
            "type": "Time",
            "optional": false,
            "field": "results:invitees:create_time",
            "description": "<p>Time to invite this invitee.</p>"
          },
          {
            "group": "Success 200",
            "type": "Time",
            "optional": false,
            "field": "results:invitees:lastmod",
            "description": "<p>Last modified time for this invitation.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "activity:authorize",
            "description": "<p>User's authorization for this activity ( admin/invited/joined/read ).</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "results:lastmod",
            "description": "<p>The last modified time of this activity.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_description",
            "description": "<p>Error message.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\nContent-Type: application/json; charset=utf-8\n\n{\n    \"result\":\"success\",\n    \"code\":200,\n    \"count\":1,\n    \"results\":[\n        {\n            \"id\":\"41\",\n            \"userid\":\"187\",\n            \"username\":\"testuser\",\n            \"headimg\":\"https://api.hangaround.tw/eattogether/user/headimg/281dee7db2cf9d272f93516c79d0410000836f1b1af27e9794fb768bc857b301_sqr_150.jpg\",\n            \"title\":\"any_title\",\n            \"content\":\"some_description\",\n            \"num_of_friend\":\"0\",\n            \"num_of_guest\":\"0\",\n            \"activity_start_time\":\"2016-01-11 07:40:28\",\n            \"activity_end_time\":\"0000-00-00 00:00:00\",\n            \"location_id\":\"50\",\n            \"location_name\":\"any_location\",\n            \"create_time\":\"2016-01-11 07:40:30\",\n            \"activitycover\":\"https://api.hangaround.tw/eattogether/activity/cover/p400/ecb582a6eca2ead6bfc8762686496ff00008df917041857eb9bf1476cafc9ff0\",\n            \"activityphoto\":[\n                {\n                    \"id\":\"0\",\n                    \"url\":\"https://api.hangaround.tw/eattogether/activity/photo/p800/ecb582a6eca2ead6bfc8700006496ff0bdc8df917041857eb9bf1476cafc9ff0/0\",\n                    \"thumbnail_url\":\"https://api.hangaround.tw/eattogether/activity/photo/thumbnail/ecb582a6eca2ea0000c8762686496ff0bdc8df917041857eb9bf1476cafc9ff0/0\"\n                }\n            ],\n            \"invitees\":[\n                {\n                    \"id\":\"248\"\n                    \"username\":\"anyuser\",\n                    \"email\":\"anyuser@hangaround.tw\",\n                    \"headimg\":\"https://api.hangaround.tw/eattogether/user/headimg/0a8b29b38e1f3370000089b5d1fd59b2a444a5cda6f30a4bca5fa74ce034d4e1_sqr_150.jpg\",\n                    \"create_time\":\"2015-10-14 21:43:28\",\n                    \"lastmod\":\"2015-10-24 16:59:15\"\n                }\n            ],\n            \"authorize\":\"invited\",\n            \"lastmod\":\"2016-01-11 07:40:30\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "HTTP Status Code": [
          {
            "group": "HTTP Status Code",
            "optional": false,
            "field": "HTTP-200",
            "description": "<p>Empty query result.</p>"
          },
          {
            "group": "HTTP Status Code",
            "optional": false,
            "field": "HTTP-401",
            "description": "<p>Unauthorized access.</p>"
          },
          {
            "group": "HTTP Status Code",
            "optional": false,
            "field": "HTTP-500",
            "description": "<p>Internal Server Error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "[HTTP-200] Error-Response:",
          "content": "HTTP/1.1 200 OK\nContent-Type: application/json; charset=utf-8\n\n{\n    \"result\":\"fail\",\n    \"code\":201,\n    \"error_description\":\"Empty query result\"\n}",
          "type": "json"
        },
        {
          "title": "[HTTP-401] Error-Response:",
          "content": "HTTP/1.1 401 Unauthorized",
          "type": "json"
        },
        {
          "title": "[HTTP-500] Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n\n{\n    \"result\":\"fail\",\n    \"code\":5xx,\n    \"error_description\":\"some error message\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/activity.php",
    "groupTitle": "Activity"
  },
  {
    "version": "1.0.0",
    "type": "get",
    "url": "/eattogether/activity/query/:aid",
    "title": "***Query an activity.",
    "name": "QueryActivity",
    "group": "Activity",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "HTTP-attribute",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Resource owner's access token.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "GET /eattogether/activity/query/41 HTTP/1.1\nHost: api.hangaround.tw\nAccept: * / *\nAuthorization: Bearer d5768df446cc325b3d08aa861f675d9f4b5486a7\nContent-Type: application/x-www-form-urlencoded",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "aid",
            "description": "<p>Activity id.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>Query result(success/fail).</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": "<p>Code of API access result.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "activity",
            "description": "<p>Query activity result.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "activity:id",
            "description": "<p>Activity id.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "activity:userid",
            "description": "<p>Activity owner's id.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "activity:username",
            "description": "<p>Activity owner's user name.</p>"
          },
          {
            "group": "Success 200",
            "type": "Url",
            "optional": false,
            "field": "activity:headimg",
            "description": "<p>Activity owner's head image.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "activity:title",
            "description": "<p>Activity title.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "activity:content",
            "description": "<p>Activity description.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "activity:num_of_friend",
            "description": "<p>Number of friend that can join this activity.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "activity:num_of_guest",
            "description": "<p>Number of guest that can join this activity.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "activity:activity_start_time",
            "description": "<p>Activity start time.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "activity:activity_end_time",
            "description": "<p>Activity end time.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "activity:location_id",
            "description": "<p>Activity location's id.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "activity:location_name",
            "description": "<p>Activity location's name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "activity:create_time",
            "description": "<p>Activity create time.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "activity:activitycover",
            "description": "<p>Activity's cover image(null when image not exist).</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "activity:activityphoto",
            "description": "<p>Activity's photos(null when no images exist).</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "activity:activityphoto:id",
            "description": "<p>Activity photo's id.</p>"
          },
          {
            "group": "Success 200",
            "type": "Url",
            "optional": false,
            "field": "activity:activityphoto:url",
            "description": "<p>Activity photo's url.</p>"
          },
          {
            "group": "Success 200",
            "type": "Url",
            "optional": false,
            "field": "activity:activityphoto:thumbnail_url",
            "description": "<p>Activity photo's thumbnail url.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "activity:invitees",
            "description": "<p>Activity's invitees.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "activity:invitees:id",
            "description": "<p>Invitee's id.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "activity:invitees:username",
            "description": "<p>Invitee's username.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "activity:invitees:email",
            "description": "<p>Invitee's email.</p>"
          },
          {
            "group": "Success 200",
            "type": "Url",
            "optional": false,
            "field": "activity:invitees:headimg",
            "description": "<p>Invitee's head image url(null when image not exist).</p>"
          },
          {
            "group": "Success 200",
            "type": "Time",
            "optional": false,
            "field": "activity:invitees:create_time",
            "description": "<p>Time to invite this invitee.</p>"
          },
          {
            "group": "Success 200",
            "type": "Time",
            "optional": false,
            "field": "activity:invitees:lastmod",
            "description": "<p>Last modified time for this invitation.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "activity:authorize",
            "description": "<p>User's authorization for this activity ( admin/invited/joined/read ).</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "activity:lastmod",
            "description": "<p>The last modified time of this activity.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_description",
            "description": "<p>Error message.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\nContent-Type: application/json; charset=utf-8\n\n{\n    \"result\":\"success\",\n    \"code\":200,\n    \"activity\": {\n        \"id\":\"41\",\n        \"userid\":\"187\",\n        \"username\":\"testuser\",\n        \"headimg\":\"https://api.hangaround.tw/eattogether/user/headimg/281dee7db2cf9d272f93516c79d0410000836f1b1af27e9794fb768bc857b301_sqr_150.jpg\",\n        \"title\":\"any_title\",\n        \"content\":\"some_description\",\n        \"num_of_friend\":\"0\",\n        \"num_of_guest\":\"0\",\n        \"activity_start_time\":\"2016-01-11 07:40:28\",\n        \"activity_end_time\":\"0000-00-00 00:00:00\",\n        \"location_id\":\"50\",\n        \"location_name\":\"any_location\",\n        \"create_time\":\"2016-01-11 07:40:30\",\n        \"activitycover\":\"https://api.hangaround.tw/eattogether/activity/cover/p400/ecb582a6eca2ead6bfc8762686496ff00008df917041857eb9bf1476cafc9ff0\",\n        \"activityphoto\":[\n            {\n                \"id\":\"0\",\n                \"url\":\"https://api.hangaround.tw/eattogether/activity/photo/p800/ecb582a6eca2ead6bfc8700006496ff0bdc8df917041857eb9bf1476cafc9ff0/0\",\n                \"thumbnail_url\":\"https://api.hangaround.tw/eattogether/activity/photo/thumbnail/ecb582a6eca2ea0000c8762686496ff0bdc8df917041857eb9bf1476cafc9ff0/0\"\n            }\n        ],\n        \"invitees\":[\n            {\n                \"id\":\"248\"\n                \"username\":\"anyuser\",\n                \"email\":\"anyuser@hangaround.tw\",\n                \"headimg\":\"https://api.hangaround.tw/eattogether/user/headimg/0a8b29b38e1f3370000089b5d1fd59b2a444a5cda6f30a4bca5fa74ce034d4e1_sqr_150.jpg\",\n                \"create_time\":\"2015-10-14 21:43:28\",\n                \"lastmod\":\"2015-10-24 16:59:15\"\n            }\n        ],\n        \"authorize\":\"joined\",\n        \"lastmod\":\"2016-01-11 07:40:30\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "HTTP Status Code": [
          {
            "group": "HTTP Status Code",
            "optional": false,
            "field": "HTTP-200",
            "description": "<p>Empty query result.</p>"
          },
          {
            "group": "HTTP Status Code",
            "optional": false,
            "field": "HTTP-401",
            "description": "<p>Unauthorized access.</p>"
          },
          {
            "group": "HTTP Status Code",
            "optional": false,
            "field": "HTTP-500",
            "description": "<p>Internal Server Error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "[HTTP-200] Error-Response:",
          "content": "HTTP/1.1 200 OK\nContent-Type: application/json; charset=utf-8\n\n{\n    \"result\":\"fail\",\n    \"code\":201,\n    \"error_description\":\"Empty query result\"\n}",
          "type": "json"
        },
        {
          "title": "[HTTP-401] Error-Response:",
          "content": "HTTP/1.1 401 Unauthorized",
          "type": "json"
        },
        {
          "title": "[HTTP-500] Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n\n{\n    \"result\":\"fail\",\n    \"code\":5xx,\n    \"error_description\":\"some error message\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/activity.php",
    "groupTitle": "Activity"
  },
  {
    "version": "1.0.0",
    "type": "get",
    "url": "/eattogether/activity/querymsg",
    "title": "Query activity messages.",
    "name": "QueryActivityMessage",
    "group": "Activity",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "HTTP-attribute",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Resource owner's access token.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "GET /eattogether/activity/querymsg?aid=43 HTTP/1.1\nHost: api.hangaround.tw\nAccept: * / *\nAuthorization: Bearer d5768df446cc325b3d08aa861f675d9f4b5486a7\nContent-Type: application/x-www-form-urlencoded",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "Activity",
            "description": "<p>id.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>Query result(success/fail).</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": "<p>Code of API access result.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "count",
            "description": "<p>Number of results</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "results",
            "description": "<p>Query activity message list results.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "results:message_id",
            "description": "<p>The message id.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "results:message",
            "description": "<p>The message content.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "results:userid",
            "description": "<p>The user id of this message.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "results:username",
            "description": "<p>The user name of this message.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "results:headimg",
            "description": "<p>The user's head image.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "results:lastmod",
            "description": "<p>The last modified time of this message.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_description",
            "description": "<p>Error message.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\nContent-Type: application/json; charset=utf-8\n\n{\n    \"result\":\"success\",\n    \"code\":200,\n    \"count\":2,\n    \"results\":[\n        {\n            \"message_id\":\"27\",\n            \"userid\":\"240\",\n            \"username\":\"username1\",\n            \"message\":\"message1\",\n            \"lastmod\":\"2016-02-09 00:50:17\",\n            \"headimg\":\"https://api.hangaround.tw/eattogether/user/headimg/5d232873a2df1a292cc5ddd79fdc380486cd57ddd6a47e6a3afcc340f3294e3a_sqr_150.jpg\"\n        },\n        {\n            \"message_id\":\"26\",\n            \"userid\":\"187\",\n            \"username\":\"username2\",\n            \"message\":\"message2\",\n            \"lastmod\":\"2016-02-09 00:39:35\",\n            \"headimg\":\"https://api.hangaround.tw/eattogether/user/headimg/281dee7db2cf9d272ddd516c79d041b489836fdddaf27e9794fb768bc857b301_sqr_150.jpg\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "HTTP Status Code": [
          {
            "group": "HTTP Status Code",
            "optional": false,
            "field": "HTTP-200",
            "description": "<p>Empty query result.</p>"
          },
          {
            "group": "HTTP Status Code",
            "optional": false,
            "field": "401",
            "description": "<p>Unauthorized access.</p>"
          },
          {
            "group": "HTTP Status Code",
            "optional": false,
            "field": "500",
            "description": "<p>Internal Server Error.</p>"
          }
        ],
        "HTTP-401": [
          {
            "group": "HTTP-401",
            "optional": false,
            "field": "code:501",
            "description": "<p>Unauthorized access.</p>"
          },
          {
            "group": "HTTP-401",
            "optional": false,
            "field": "code:502",
            "description": "<p>Unauthorized access.</p>"
          }
        ],
        "HTTP-500": [
          {
            "group": "HTTP-500",
            "optional": false,
            "field": "code:300",
            "description": "<p>Unknown exception.</p>"
          },
          {
            "group": "HTTP-500",
            "optional": false,
            "field": "code:301",
            "description": "<p>Fail to get messages.</p>"
          },
          {
            "group": "HTTP-500",
            "optional": false,
            "field": "code:305",
            "description": "<p>Invalid parameter.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "[HTTP-200] Error-Response:",
          "content": "HTTP/1.1 200 OK\nContent-Type: application/json; charset=utf-8\n\n{\n    \"result\":\"fail\",\n    \"code\":201,\n    \"error_description\":\"Empty query result\"\n}",
          "type": "json"
        },
        {
          "title": "[HTTP-401] Error-Response:",
          "content": "HTTP/1.1 401 Unauthorized",
          "type": "json"
        },
        {
          "title": "[HTTP-500] Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n\n{\n    \"result\":\"fail\",\n    \"code\":3xx,\n    \"error_description\":\"some error message\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/activity.php",
    "groupTitle": "Activity"
  },
  {
    "version": "1.0.0",
    "type": "post",
    "url": "/eattogether/activity/replymsg",
    "title": "Reply a activity message.",
    "name": "ReplyActivityMessage",
    "group": "Activity",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "aid",
            "description": "<p>Activity id.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "msgid",
            "description": "<p>Message id to reply.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Message to leave.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Resource owner's access token.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>Query result(success/fail).</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": "<p>Code of API access result.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_description",
            "description": "<p>Error message.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\nContent-Type: application/json; charset=utf-8\n\n{\n    \"result\":\"success\",\n    \"code\":200\n}",
          "type": "json"
        }
      ]
    },
    "header": {
      "examples": [
        {
          "title": "Header-Example:",
          "content": "POST /eattogether/activity/replymsg HTTP/1.1\nHost: api.hangaround.tw\nAccept: * / *\nContent-Type: application/x-www-form-urlencoded\n\naid=12&msgid=15&msg=some_messages&access_token=d5768df446cc325b3d08aa861f675d9f4b5486a7",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "HTTP Status Code": [
          {
            "group": "HTTP Status Code",
            "optional": false,
            "field": "401",
            "description": "<p>Unauthorized access.</p>"
          },
          {
            "group": "HTTP Status Code",
            "optional": false,
            "field": "500",
            "description": "<p>Internal Server Error.</p>"
          }
        ],
        "HTTP-401": [
          {
            "group": "HTTP-401",
            "optional": false,
            "field": "code:501",
            "description": "<p>Unauthorized access.</p>"
          },
          {
            "group": "HTTP-401",
            "optional": false,
            "field": "code:502",
            "description": "<p>Unauthorized access.</p>"
          }
        ],
        "HTTP-500": [
          {
            "group": "HTTP-500",
            "optional": false,
            "field": "code:300",
            "description": "<p>Unknown exception.</p>"
          },
          {
            "group": "HTTP-500",
            "optional": false,
            "field": "code:301",
            "description": "<p>Empty message.</p>"
          },
          {
            "group": "HTTP-500",
            "optional": false,
            "field": "code:302",
            "description": "<p>Unknown member.</p>"
          },
          {
            "group": "HTTP-500",
            "optional": false,
            "field": "code:303",
            "description": "<p>Unknown activity.</p>"
          },
          {
            "group": "HTTP-500",
            "optional": false,
            "field": "code:304",
            "description": "<p>Unknown message to reply to.</p>"
          },
          {
            "group": "HTTP-500",
            "optional": false,
            "field": "code:305",
            "description": "<p>Invalid parameter.</p>"
          },
          {
            "group": "HTTP-500",
            "optional": false,
            "field": "code:399",
            "description": "<p>Other error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "[HTTP-401] Error-Response:",
          "content": "HTTP/1.1 401 Unauthorized",
          "type": "json"
        },
        {
          "title": "[HTTP-500] Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n\n{\n    \"result\":\"fail\",\n    \"code\":3xx,\n    \"error_description\":\"some error message\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/activity.php",
    "groupTitle": "Activity"
  },
  {
    "version": "1.0.0",
    "type": "post",
    "url": "/eattogether/activity/update",
    "title": "Update an activity.",
    "name": "UpdateActivity",
    "group": "Activity",
    "filename": "controllers/activity.php",
    "groupTitle": "Activity"
  },
  {
    "version": "1.0.0",
    "type": "post",
    "url": "/eattogether/activity/addphoto",
    "title": "Upload activity photo.",
    "name": "UploadActivityPhoto",
    "group": "Activity",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Binary",
            "optional": false,
            "field": "img",
            "description": "<p>The upload image binary data.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "aid",
            "description": "<p>Id of Activity which to upload cover.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>Query result(success/fail).</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": "<p>Code of API access result.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_description",
            "description": "<p>Error message.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\nContent-Type: application/json; charset=utf-8\n\n{\n    \"result\":\"success\",\n    \"code\":200\n}",
          "type": "json"
        }
      ]
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "HTTP-attribute",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Resource owner's access token.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "POST /eattogether/activity/addphoto HTTP/1.1\nHost: api.hangaround.tw\nAccept: * / *\nAuthorization: Bearer d5768df446cc325b3d08aa861f675d9f4b5486a7\nContent-Type: multipart/form-data; boundary=----WebKitFormBoundaryePkpFF7tjBAqx29L\n\n------WebKitFormBoundaryePkpFF7tjBAqx29L\nContent-Disposition: form-data; name=\"aid\"\n\n15\n------WebKitFormBoundaryePkpFF7tjBAqx29L\nContent-Disposition: form-data; name=\"img\"; filename=\"activityphoto.png\"\nContent-Type: image/png\n\n[Binary Data]\n------WebKitFormBoundaryePkpFF7tjBAqx29L--",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "HTTP Status Code": [
          {
            "group": "HTTP Status Code",
            "optional": false,
            "field": "401",
            "description": "<p>Unauthorized access.</p>"
          },
          {
            "group": "HTTP Status Code",
            "optional": false,
            "field": "500",
            "description": "<p>Fail to upload cover.</p>"
          }
        ],
        "HTTP-401": [
          {
            "group": "HTTP-401",
            "optional": false,
            "field": "code:501",
            "description": "<p>Unauthorized access.</p>"
          },
          {
            "group": "HTTP-401",
            "optional": false,
            "field": "code:502",
            "description": "<p>Unauthorized access.</p>"
          }
        ],
        "HTTP-500": [
          {
            "group": "HTTP-500",
            "optional": false,
            "field": "code:300",
            "description": "<p>Unknown exception.</p>"
          },
          {
            "group": "HTTP-500",
            "optional": false,
            "field": "code:301",
            "description": "<p>Upload error.</p>"
          },
          {
            "group": "HTTP-500",
            "optional": false,
            "field": "code:302",
            "description": "<p>Fail to resize image.</p>"
          },
          {
            "group": "HTTP-500",
            "optional": false,
            "field": "code:303",
            "description": "<p>Fail to resize image.</p>"
          },
          {
            "group": "HTTP-500",
            "optional": false,
            "field": "code:304",
            "description": "<p>Fail to resize image.</p>"
          },
          {
            "group": "HTTP-500",
            "optional": false,
            "field": "code:305",
            "description": "<p>Invalid parameter.</p>"
          },
          {
            "group": "HTTP-500",
            "optional": false,
            "field": "code:306",
            "description": "<p>Fail to process image.</p>"
          },
          {
            "group": "HTTP-500",
            "optional": false,
            "field": "code:307",
            "description": "<p>Fail to process image.</p>"
          },
          {
            "group": "HTTP-500",
            "optional": false,
            "field": "code:308",
            "description": "<p>Fail to resize image</p>"
          },
          {
            "group": "HTTP-500",
            "optional": false,
            "field": "code:309",
            "description": "<p>Fail to process image</p>"
          },
          {
            "group": "HTTP-500",
            "optional": false,
            "field": "code:310",
            "description": "<p>Fail to process image</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "[401] Error-Response:",
          "content": "HTTP/1.1 401 Unauthorized\n\n{\n    \"result\":\"fail\",\n    \"code\":5xx,\n    \"error_description\":\"Unauthorized access\"\n}",
          "type": "json"
        },
        {
          "title": "[500] Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n\n{\n    \"result\":\"fail\",\n    \"code\":3xx,\n    \"error_description\":\"some error message\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/activity.php",
    "groupTitle": "Activity"
  },
  {
    "version": "1.0.0",
    "type": "post",
    "url": "/eattogether/friend/accept",
    "title": "Accept friend invitation.",
    "name": "AcceptFriendInvitation",
    "group": "Friend",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Resource owner's access token.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "uid",
            "description": "<p>Id of user who asked for friendship.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>Query result(success/fail).</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": "<p>Code of API access result.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_description",
            "description": "<p>Error message.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\nContent-Type: application/json; charset=utf-8\n\n{\n    \"result\":\"success\",\n    \"code\":200\n}",
          "type": "json"
        }
      ]
    },
    "header": {
      "examples": [
        {
          "title": "Header-Example:",
          "content": "POST /eattogether/friend/accept HTTP/1.1\nHost: api.hangaround.tw\nAccept: * / *\nContent-Type: application/x-www-form-urlencoded\n\nuid=15&access_token=d5768df446cc325b3d08aa861f675d9f4b5486a7",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "HTTP Status Code": [
          {
            "group": "HTTP Status Code",
            "optional": false,
            "field": "401",
            "description": "<p>Unauthorized access.</p>"
          },
          {
            "group": "HTTP Status Code",
            "optional": false,
            "field": "500",
            "description": "<p>Internal Server Error.</p>"
          }
        ],
        "HTTP-200": [
          {
            "group": "HTTP-200",
            "optional": false,
            "field": "code:201",
            "description": "<p>Already friend.</p>"
          }
        ],
        "HTTP-401": [
          {
            "group": "HTTP-401",
            "optional": false,
            "field": "code:502",
            "description": "<p>Unauthorized access.</p>"
          }
        ],
        "HTTP-500": [
          {
            "group": "HTTP-500",
            "optional": false,
            "field": "code:302",
            "description": "<p>Unauthorized access.</p>"
          },
          {
            "group": "HTTP-500",
            "optional": false,
            "field": "code:303",
            "description": "<p>Fail to check relation.</p>"
          },
          {
            "group": "HTTP-500",
            "optional": false,
            "field": "code:306",
            "description": "<p>No specified invitation.</p>"
          },
          {
            "group": "HTTP-500",
            "optional": false,
            "field": "code:307",
            "description": "<p>Fail to accept invitation.</p>"
          },
          {
            "group": "HTTP-500",
            "optional": false,
            "field": "code:399",
            "description": "<p>Fail to accept invitation.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "[HTTP-200] Error-Response:",
          "content": "HTTP/1.1 200 OK\nContent-Type: application/json; charset=utf-8\n\n{\n    \"result\":\"fail\",\n    \"code\":201,\n    \"error_description\":\"Already friend\"\n}",
          "type": "json"
        },
        {
          "title": "[HTTP-401] Error-Response:",
          "content": "HTTP/1.1 401 Unauthorized",
          "type": "json"
        },
        {
          "title": "[HTTP-500] Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n\n{\n    \"result\":\"fail\",\n    \"code\":3xx,\n    \"error_description\":\"some error message\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/friend.php",
    "groupTitle": "Friend"
  },
  {
    "version": "1.0.0",
    "type": "post",
    "url": "/eattogether/friend/add",
    "title": "Create a friend relation.",
    "name": "CreateFriendRelation",
    "group": "Friend",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Resource owner's access token.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "uid",
            "description": "<p>Id of user who to be asked as a friend.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>Query result(success/fail).</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": "<p>Code of API access result.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_description",
            "description": "<p>Error message.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\nContent-Type: application/json; charset=utf-8\n\n{\n    \"result\":\"success\",\n    \"code\":200\n}",
          "type": "json"
        }
      ]
    },
    "header": {
      "examples": [
        {
          "title": "Header-Example:",
          "content": "POST /eattogether/friend/add HTTP/1.1\nHost: api.hangaround.tw\nAccept: * / *\nContent-Type: application/x-www-form-urlencoded\n\nuid=15&access_token=d5768df446cc325b3d08aa861f675d9f4b5486a7",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "HTTP Status Code": [
          {
            "group": "HTTP Status Code",
            "optional": false,
            "field": "401",
            "description": "<p>Unauthorized access.</p>"
          },
          {
            "group": "HTTP Status Code",
            "optional": false,
            "field": "500",
            "description": "<p>Internal Server Error.</p>"
          }
        ],
        "HTTP-401": [
          {
            "group": "HTTP-401",
            "optional": false,
            "field": "code:502",
            "description": "<p>Unauthorized access.</p>"
          }
        ],
        "HTTP-500": [
          {
            "group": "HTTP-500",
            "optional": false,
            "field": "code:302",
            "description": "<p>Fail to add friendship.</p>"
          },
          {
            "group": "HTTP-500",
            "optional": false,
            "field": "code:303",
            "description": "<p>Already friends.</p>"
          },
          {
            "group": "HTTP-500",
            "optional": false,
            "field": "code:304",
            "description": "<p>Fail to add friendship.</p>"
          },
          {
            "group": "HTTP-500",
            "optional": false,
            "field": "code:305",
            "description": "<p>Invalid parameter.</p>"
          },
          {
            "group": "HTTP-500",
            "optional": false,
            "field": "code:306",
            "description": "<p>You have invited before.</p>"
          },
          {
            "group": "HTTP-500",
            "optional": false,
            "field": "code:307",
            "description": "<p>Friend invite you already.</p>"
          },
          {
            "group": "HTTP-500",
            "optional": false,
            "field": "code:308",
            "description": "<p>You cannot invite yourself.</p>"
          },
          {
            "group": "HTTP-500",
            "optional": false,
            "field": "code:399",
            "description": "<p>Fail to add friendship.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "[HTTP-401] Error-Response:",
          "content": "HTTP/1.1 401 Unauthorized",
          "type": "json"
        },
        {
          "title": "[HTTP-500] Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n\n{\n    \"result\":\"fail\",\n    \"code\":3xx,\n    \"error_description\":\"some error message\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/friend.php",
    "groupTitle": "Friend"
  },
  {
    "version": "1.0.0",
    "type": "get",
    "url": "/eattogether/friend/list",
    "title": "Get friend list.",
    "name": "GetFriendList",
    "group": "Friend",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "HTTP-attribute",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Resource owner's access token.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "GET /eattogether/friend/list HTTP/1.1\nHost: api.hangaround.tw\nAccept: * / *\nContent-Type: application/x-www-form-urlencoded",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>Query result(success/fail).</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": "<p>Code of API access result.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_description",
            "description": "<p>Error message.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\nContent-Type: application/json; charset=utf-8\n\n{\n    \"result\":\"success\",\n    \"code\":200,\n    \"count\":2,\n    \"results\":[\n        {\n            \"id\":\"240\",\n            \"username\":\"Sara\",\n            \"email\":\"aa@bb.cc\",\n            \"headimg\":\"https://api.hangaround.tw/eattogether/user/headimg/5d232873a2df1a292cc511279fdc380486cd57f146a47e6a3afcc340f3294e3a_sqr_150.jpg\"\n        },\n        {\n            \"id\":\"248\",\n            \"username\":\"yyiisshhiiaa\",\n            \"email\":\"yishiashia@cht.com.tw\",\n            \"headimg\":\"https://api.hangaround.tw/eattogether/user/headimg/0a8b29b38e1f337a3fa789b5d1fd59b2a444a5cda6f30a4bca5fa74ce034d4e1_sqr_150.jpg\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "HTTP Status Code": [
          {
            "group": "HTTP Status Code",
            "optional": false,
            "field": "HTTP-200",
            "description": "<p>Empty query result.</p>"
          },
          {
            "group": "HTTP Status Code",
            "optional": false,
            "field": "401",
            "description": "<p>Unauthorized access.</p>"
          },
          {
            "group": "HTTP Status Code",
            "optional": false,
            "field": "500",
            "description": "<p>Internal Server Error.</p>"
          }
        ],
        "HTTP-401": [
          {
            "group": "HTTP-401",
            "optional": false,
            "field": "code:502",
            "description": "<p>Unauthorized access.</p>"
          }
        ],
        "HTTP-500": [
          {
            "group": "HTTP-500",
            "optional": false,
            "field": "code:201",
            "description": "<p>Empty query result.</p>"
          },
          {
            "group": "HTTP-500",
            "optional": false,
            "field": "code:300",
            "description": "<p>Fail to retrieve friend list.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "[HTTP-200] Error-Response:",
          "content": "HTTP/1.1 200 OK\nContent-Type: application/json; charset=utf-8\n\n{\n    \"result\":\"fail\",\n    \"code\":201,\n    \"error_description\":\"Empty query result\"\n}",
          "type": "json"
        },
        {
          "title": "[HTTP-401] Error-Response:",
          "content": "HTTP/1.1 401 Unauthorized",
          "type": "json"
        },
        {
          "title": "[HTTP-500] Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n\n{\n    \"result\":\"fail\",\n    \"code\":3xx,\n    \"error_description\":\"some error message\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/friend.php",
    "groupTitle": "Friend"
  },
  {
    "version": "1.0.0",
    "type": "post",
    "url": "/eattogether/friend/reject",
    "title": "Reject friend invitation.",
    "name": "RejectFriendInvitation",
    "group": "Friend",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Resource owner's access token.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "uid",
            "description": "<p>Id of user who asked for friendship.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>Query result(success/fail).</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": "<p>Code of API access result.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_description",
            "description": "<p>Error message.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\nContent-Type: application/json; charset=utf-8\n\n{\n    \"result\":\"success\",\n    \"code\":200\n}",
          "type": "json"
        }
      ]
    },
    "header": {
      "examples": [
        {
          "title": "Header-Example:",
          "content": "POST /eattogether/friend/reject HTTP/1.1\nHost: api.hangaround.tw\nAccept: * / *\nContent-Type: application/x-www-form-urlencoded\n\nuid=15&access_token=d5768df446cc325b3d08aa861f675d9f4b5486a7",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "HTTP Status Code": [
          {
            "group": "HTTP Status Code",
            "optional": false,
            "field": "401",
            "description": "<p>Unauthorized access.</p>"
          },
          {
            "group": "HTTP Status Code",
            "optional": false,
            "field": "500",
            "description": "<p>Internal Server Error.</p>"
          }
        ],
        "HTTP-500": [
          {
            "group": "HTTP-500",
            "optional": false,
            "field": "code:502",
            "description": "<p>Unauthorized access.</p>"
          },
          {
            "group": "HTTP-500",
            "optional": false,
            "field": "code:306",
            "description": "<p>No specified invitation.</p>"
          },
          {
            "group": "HTTP-500",
            "optional": false,
            "field": "code:307",
            "description": "<p>Fail to reject invitation.</p>"
          },
          {
            "group": "HTTP-500",
            "optional": false,
            "field": "code:399",
            "description": "<p>Fail to reject invitation.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "[HTTP-401] Error-Response:",
          "content": "HTTP/1.1 401 Unauthorized",
          "type": "json"
        },
        {
          "title": "[HTTP-500] Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n\n{\n    \"result\":\"fail\",\n    \"code\":3xx,\n    \"error_description\":\"some error message\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/friend.php",
    "groupTitle": "Friend"
  },
  {
    "version": "1.0.0",
    "type": "post",
    "url": "/eattogether/oauth2/token",
    "title": "Request User access token",
    "name": "GetUserAccessToken",
    "group": "OAuth2",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "grant_type",
            "description": "<p>Resource owner grant type.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Resource owner's account.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Resource owner's password.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "scope",
            "description": "<p>Resource owner's scope.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Resource owner's access token.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "expires_in",
            "description": "<p>Access token time(seconds).</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token_type",
            "description": "<p>Token type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "scope",
            "description": "<p>Resouce owner authorization scope.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "refresh_token",
            "description": "<p>The refresh token for getting new access token.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\nContent-Type: application/json\n\n{\n    \"access_token\":\"37a5dc6884eb1afbcb1e65d7d3f2fe2e0719bfe9\",\n    \"expires_in\":3600,\n    \"token_type\":\"Bearer\",\n    \"scope\":\"AAA\",\n    \"refresh_token\":\"5f1e68cbc202a7876f7e72b4b0a33db4c4ec8111\"\n}",
          "type": "json"
        }
      ]
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "HTTP-attribute",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Base64 encoded client's username and password.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "POST /eattogether/oauth2/token HTTP/1.1\nHost: api.hangaround.tw\nAccept: * / *\nAuthorization: Basic dGVzdHVzZXI6dGVzdHBhc3N3ZA==\nContent-Type: application/x-www-form-urlencoded\n\ngrant_type=password&username=testuser&password=testpasswd&scope=TEST",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "HTTP Status Code": [
          {
            "group": "HTTP Status Code",
            "optional": false,
            "field": "400",
            "description": "<p>Invalid OAuth request.</p>"
          },
          {
            "group": "HTTP Status Code",
            "optional": false,
            "field": "401",
            "description": "<p>Unauthorized OAuth request.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "[400] Error-Response:",
          "content": "HTTP/1.1 400 Bad Request",
          "type": "json"
        },
        {
          "title": "[401] Error-Response:",
          "content": "HTTP/1.1 401 Unauthorized\n\n{\n    \"code\":401,\n    \"error\":\"invalid_grant\",\n    \"error_description\":\"Invalid username and password combination\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/oauth2.php",
    "groupTitle": "OAuth2"
  },
  {
    "version": "1.0.0",
    "type": "post",
    "url": "/eattogether/place/add",
    "title": "Create a place.",
    "name": "CreatePlace",
    "group": "Place",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Resource owner's access token.</p>"
          },
          {
            "group": "Parameter",
            "type": "JSON",
            "optional": false,
            "field": "data",
            "description": "<p>Place information.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "data:name",
            "description": "<p>Place name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "data:phone",
            "description": "<p>Place phone number.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "data:address",
            "description": "<p>Place address.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "data:score",
            "description": "<p>Place's score(0-100).</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>Query result(success/fail).</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": "<p>Code of API access result.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_description",
            "description": "<p>Error message.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\nContent-Type: application/json; charset=utf-8\n\n{\n    \"result\":\"success\",\n    \"code\":200,\n    \"place_id\":14\n}",
          "type": "json"
        }
      ]
    },
    "header": {
      "examples": [
        {
          "title": "Header-Example:",
          "content": "POST /eattogether/place/add HTTP/1.1\nHost: api.hangaround.tw\nAccept: * / *\nContent-Type: application/x-www-form-urlencoded\n\ndata={\"score\":\"\",\"address\":\"adress of place \",\"phone\":\"phone of place\",\"name\":\"place name\"}\n&access_token=d5768df446cc325b3d08aa861f675d9f4b5486a7",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "HTTP Status Code": [
          {
            "group": "HTTP Status Code",
            "optional": false,
            "field": "401",
            "description": "<p>Unauthorized access.</p>"
          },
          {
            "group": "HTTP Status Code",
            "optional": false,
            "field": "500",
            "description": "<p>Internal Server Error.</p>"
          }
        ],
        "HTTP-500": [
          {
            "group": "HTTP-500",
            "optional": false,
            "field": "code:502",
            "description": "<p>Unauthorized access.</p>"
          },
          {
            "group": "HTTP-500",
            "optional": false,
            "field": "code:300",
            "description": "<p>Fail to add activity.</p>"
          },
          {
            "group": "HTTP-500",
            "optional": false,
            "field": "code:301",
            "description": "<p>Invalid parameter.</p>"
          },
          {
            "group": "HTTP-500",
            "optional": false,
            "field": "code:302",
            "description": "<p>Member not found.</p>"
          },
          {
            "group": "HTTP-500",
            "optional": false,
            "field": "code:303",
            "description": "<p>Invalid parameter.</p>"
          },
          {
            "group": "HTTP-500",
            "optional": false,
            "field": "code:304",
            "description": "<p>Fail to add activity.</p>"
          },
          {
            "group": "HTTP-500",
            "optional": false,
            "field": "code:306",
            "description": "<p>Invalid parameter.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "[HTTP-401] Error-Response:",
          "content": "HTTP/1.1 401 Unauthorized",
          "type": "json"
        },
        {
          "title": "[HTTP-500] Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n\n{\n    \"result\":\"fail\",\n    \"code\":3xx,\n    \"error_description\":\"some error message\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/place.php",
    "groupTitle": "Place"
  },
  {
    "version": "1.0.0",
    "type": "post",
    "url": "/eattogether/place/delete",
    "title": "Delete a place.",
    "name": "DeletePlace",
    "group": "Place",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Resource owner's access token.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "pid",
            "description": "<p>Id of Place which to be deleted.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>Query result(success/fail).</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": "<p>Code of API access result.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_description",
            "description": "<p>Error message.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\nContent-Type: application/json; charset=utf-8\n\n{\n    \"result\":\"success\",\n    \"code\":200\n}",
          "type": "json"
        }
      ]
    },
    "header": {
      "examples": [
        {
          "title": "Delete-Activity:",
          "content": "POST /eattogether/place/delete HTTP/1.1\nHost: api.hangaround.tw\nAccept: * / *\nContent-Type: application/x-www-form-urlencoded\n\npid=12&access_token=d5768df446cc325b3d08aa861f675d9f4b5486a7",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "HTTP Status Code": [
          {
            "group": "HTTP Status Code",
            "optional": false,
            "field": "HTTP-401",
            "description": "<p>Unauthorized access.</p>"
          },
          {
            "group": "HTTP Status Code",
            "optional": false,
            "field": "HTTP-500",
            "description": "<p>Internal Server Error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "[HTTP-401] Error-Response:",
          "content": "HTTP/1.1 401 Unauthorized",
          "type": "json"
        },
        {
          "title": "[HTTP-500] Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n\n{\n    \"result\":\"fail\",\n    \"code\":3xx,\n    \"error_description\":\"some error message\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/place.php",
    "groupTitle": "Place"
  },
  {
    "version": "1.0.0",
    "type": "get",
    "url": "/eattogether/place/cover",
    "title": "Get place cover image.",
    "name": "GetPlaceCover",
    "group": "Place",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "filename",
            "description": "<p>Place cover image file name.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Binary",
            "optional": false,
            "field": "image",
            "description": "<p>Place cover image.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\nContent-Type: image/jpeg\n\n[Binary Data]",
          "type": "json"
        }
      ]
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "HTTP-attribute",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Resource owner's access token.</p>"
          },
          {
            "group": "Header",
            "type": "HTTP-date",
            "optional": false,
            "field": "If-Modified-Since",
            "description": "<p>Check the file has not been modified since the time specified.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "GET /eattogether/place/cover/p800/588dcfc31dca249c15483a63f2170654cf6874409101397fdab0c1afb44a37fa HTTP/1.1\nHost: api.hangaround.tw\nAccept: * / *\nAuthorization: Bearer d5768df446cc325b3d08aa861f675d9f4b5486a7\nIf-Modified-Since: Sat, 29 Oct 1994 19:43:31 GMT\nContent-Type: application/x-www-form-urlencoded",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "HTTP Status Code": [
          {
            "group": "HTTP Status Code",
            "optional": false,
            "field": "304",
            "description": "<p>The activity cover image was not modified.</p>"
          },
          {
            "group": "HTTP Status Code",
            "optional": false,
            "field": "403",
            "description": "<p>Forbidden to access the activity cover image.</p>"
          },
          {
            "group": "HTTP Status Code",
            "optional": false,
            "field": "404",
            "description": "<p>The activity cover image was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "[304] Error-Response:",
          "content": "HTTP/1.1 304 Not Modified",
          "type": "json"
        },
        {
          "title": "[403] Error-Response:",
          "content": "HTTP/1.1 403 Forbidden",
          "type": "json"
        },
        {
          "title": "[404] Error-Response:",
          "content": "HTTP/1.1 404 Not Found",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/place.php",
    "groupTitle": "Place"
  },
  {
    "version": "1.0.0",
    "type": "get",
    "url": "/eattogether/place/list",
    "title": "Query place list.",
    "name": "ListPlace",
    "group": "Place",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "HTTP-attribute",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Resource owner's access token.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "GET /eattogether/place/list HTTP/1.1\nHost: api.hangaround.tw\nAccept: * / *\nAuthorization: Bearer d5768df446cc325b3d08aa861f675d9f4b5486a7\nContent-Type: application/x-www-form-urlencoded",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>Query result(success/fail).</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": "<p>Code of API access result.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "count",
            "description": "<p>Number of results</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "results",
            "description": "<p>Query place list results.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "results:id",
            "description": "<p>Place id.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "results:name",
            "description": "<p>Place name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "results:address",
            "description": "<p>Place address.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "results:phone",
            "description": "<p>Place phone number.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "results:rate",
            "description": "<p>Place rate.</p>"
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "results:latitude",
            "description": "<p>Place latitude.</p>"
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "results:longitude",
            "description": "<p>Place longitude.</p>"
          },
          {
            "group": "Success 200",
            "type": "Time",
            "optional": false,
            "field": "results:lastmod",
            "description": "<p>Place last modified time.</p>"
          },
          {
            "group": "Success 200",
            "type": "Url",
            "optional": false,
            "field": "results:coverimg",
            "description": "<p>Place cover image.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\nContent-Type: application/json; charset=utf-8\n\n{\n    \"result\":\"success\",\n    \"code\":200,\n    \"count\":2,\n    \"results\":[\n        {\n            \"id\":\"36\",\n            \"name\":\"place name\",\n            \"address\":\"adress of place \",\n            \"phone\":\"phone of place\",\n            \"rate\":\"1\",\n            \"latitude\":\"25.006482\",\n            \"longitude\":\"121.510633\",\n            \"lastmod\":\"2016-02-21 18:25:32\",\n            \"coverimg\":null\n        },\n        {\n            \"id\":\"48\",\n            \"name\":\"staff canteen\",\n            \"address\":\"Sec. 1, Xinyi Rd., Zhongzheng Dist., Taipei City 100, Taiwan (R.O.C.)\",\n            \"phone\":\"0800-000-123\",\n            \"rate\":\"1\",\n            \"latitude\":null,\n            \"longitude\":null,\n            \"lastmod\":\"2015-12-11 23:40:34\",\n            \"coverimg\":\"https://api.hangaround.tw/eattogether/place/cover/p400/8978f82377a28ba32f8b0f496b35a200a6c283ca1ecb610663222b65e8f67e35\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "HTTP Status Code": [
          {
            "group": "HTTP Status Code",
            "optional": false,
            "field": "401",
            "description": "<p>Unauthorized access.</p>"
          },
          {
            "group": "HTTP Status Code",
            "optional": false,
            "field": "500",
            "description": "<p>Internal Server Error.</p>"
          }
        ],
        "HTTP-200": [
          {
            "group": "HTTP-200",
            "optional": false,
            "field": "code:201",
            "description": "<p>Empty query result.</p>"
          }
        ],
        "HTTP-401": [
          {
            "group": "HTTP-401",
            "optional": false,
            "field": "code:502",
            "description": "<p>Unauthorized access.</p>"
          }
        ],
        "HTTP-500": [
          {
            "group": "HTTP-500",
            "optional": false,
            "field": "code:300",
            "description": "<p>Fail to retrieve place list.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "[HTTP-200] Error-Response:",
          "content": "HTTP/1.1 200 OK\nContent-Type: application/json; charset=utf-8\n\n{\n    \"result\":\"fail\",\n    \"code\":201,\n    \"error_description\":\"Empty query result\"\n}",
          "type": "json"
        },
        {
          "title": "[HTTP-401] Error-Response:",
          "content": "HTTP/1.1 401 Unauthorized",
          "type": "json"
        },
        {
          "title": "[HTTP-500] Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n\n{\n    \"result\":\"fail\",\n    \"code\":3xx,\n    \"error_description\":\"some error message\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/place.php",
    "groupTitle": "Place"
  },
  {
    "version": "1.0.0",
    "type": "post",
    "url": "/eattogether/place/addcover",
    "title": "Upload place cover.",
    "name": "UploadPlaceCover",
    "group": "Place",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Binary",
            "optional": false,
            "field": "img",
            "description": "<p>The upload image binary data.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "pid",
            "description": "<p>Id of Place which to upload cover.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>Query result(success/fail).</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": "<p>Code of API access result.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_description",
            "description": "<p>Error message.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\nContent-Type: application/json; charset=utf-8\n\n{\n    \"result\":\"success\",\n    \"code\":200\n}",
          "type": "json"
        }
      ]
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "HTTP-attribute",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Resource owner's access token.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "POST /eattogether/place/addcover HTTP/1.1\nHost: api.hangaround.tw\nAccept: * / *\nAuthorization: Bearer d5768df446cc325b3d08aa861f675d9f4b5486a7\nContent-Type: multipart/form-data; boundary=----WebKitFormBoundaryePkpFF7tjBAqx29L\n\n------WebKitFormBoundaryePkpFF7tjBAqx29L\nContent-Disposition: form-data; name=\"pid\"\n\n15\n------WebKitFormBoundaryePkpFF7tjBAqx29L\nContent-Disposition: form-data; name=\"img\"; filename=\"activityphoto.png\"\nContent-Type: image/png\n\n[Binary Data]\n------WebKitFormBoundaryePkpFF7tjBAqx29L--",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "HTTP Status Code": [
          {
            "group": "HTTP Status Code",
            "optional": false,
            "field": "401",
            "description": "<p>Unauthorized access.</p>"
          },
          {
            "group": "HTTP Status Code",
            "optional": false,
            "field": "500",
            "description": "<p>Fail to upload cover.</p>"
          }
        ],
        "HTTP-401": [
          {
            "group": "HTTP-401",
            "optional": false,
            "field": "code:501",
            "description": "<p>Unauthorized access.</p>"
          },
          {
            "group": "HTTP-401",
            "optional": false,
            "field": "code:502",
            "description": "<p>Unauthorized access.</p>"
          }
        ],
        "HTTP-500": [
          {
            "group": "HTTP-500",
            "optional": false,
            "field": "code:300",
            "description": "<p>Unknown exception.</p>"
          },
          {
            "group": "HTTP-500",
            "optional": false,
            "field": "code:301",
            "description": "<p>Upload error.</p>"
          },
          {
            "group": "HTTP-500",
            "optional": false,
            "field": "code:302",
            "description": "<p>Fail to resize image.</p>"
          },
          {
            "group": "HTTP-500",
            "optional": false,
            "field": "code:303",
            "description": "<p>Fail to resize image.</p>"
          },
          {
            "group": "HTTP-500",
            "optional": false,
            "field": "code:304",
            "description": "<p>Fail to resize image.</p>"
          },
          {
            "group": "HTTP-500",
            "optional": false,
            "field": "code:305",
            "description": "<p>Invalid parameter.</p>"
          },
          {
            "group": "HTTP-500",
            "optional": false,
            "field": "code:306",
            "description": "<p>Fail to process image.</p>"
          },
          {
            "group": "HTTP-500",
            "optional": false,
            "field": "code:307",
            "description": "<p>Fail to process image.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "[401] Error-Response:",
          "content": "HTTP/1.1 401 Unauthorized\n\n{\n    \"result\":\"fail\",\n    \"code\":5xx,\n    \"error_description\":\"Unauthorized access\"\n}",
          "type": "json"
        },
        {
          "title": "[500] Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n\n{\n    \"result\":\"fail\",\n    \"code\":3xx,\n    \"error_description\":\"some error message\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/place.php",
    "groupTitle": "Place"
  },
  {
    "version": "1.0.0",
    "type": "post",
    "url": "/eattogether/place/addphoto",
    "title": "Upload place photo.",
    "name": "UploadPlacePhoto",
    "group": "Place",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Binary",
            "optional": false,
            "field": "img",
            "description": "<p>The upload image binary data.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "pid",
            "description": "<p>Id of Place which to upload cover.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>Query result(success/fail).</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": "<p>Code of API access result.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_description",
            "description": "<p>Error message.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\nContent-Type: application/json; charset=utf-8\n\n{\n    \"result\":\"success\",\n    \"code\":200\n}",
          "type": "json"
        }
      ]
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "HTTP-attribute",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Resource owner's access token.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "POST /eattogether/place/addphoto HTTP/1.1\nHost: api.hangaround.tw\nAccept: * / *\nAuthorization: Bearer d5768df446cc325b3d08aa861f675d9f4b5486a7\nContent-Type: multipart/form-data; boundary=----WebKitFormBoundaryePkpFF7tjBAqx29L\n\n------WebKitFormBoundaryePkpFF7tjBAqx29L\nContent-Disposition: form-data; name=\"pid\"\n\n15\n------WebKitFormBoundaryePkpFF7tjBAqx29L\nContent-Disposition: form-data; name=\"img\"; filename=\"activityphoto.png\"\nContent-Type: image/png\n\n[Binary Data]\n------WebKitFormBoundaryePkpFF7tjBAqx29L--",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "HTTP Status Code": [
          {
            "group": "HTTP Status Code",
            "optional": false,
            "field": "401",
            "description": "<p>Unauthorized access.</p>"
          },
          {
            "group": "HTTP Status Code",
            "optional": false,
            "field": "500",
            "description": "<p>Fail to upload cover.</p>"
          }
        ],
        "HTTP-401": [
          {
            "group": "HTTP-401",
            "optional": false,
            "field": "code:501",
            "description": "<p>Unauthorized access.</p>"
          },
          {
            "group": "HTTP-401",
            "optional": false,
            "field": "code:502",
            "description": "<p>Unauthorized access.</p>"
          }
        ],
        "HTTP-500": [
          {
            "group": "HTTP-500",
            "optional": false,
            "field": "code:300",
            "description": "<p>Unknown exception.</p>"
          },
          {
            "group": "HTTP-500",
            "optional": false,
            "field": "code:301",
            "description": "<p>Upload error.</p>"
          },
          {
            "group": "HTTP-500",
            "optional": false,
            "field": "code:302",
            "description": "<p>Fail to resize image.</p>"
          },
          {
            "group": "HTTP-500",
            "optional": false,
            "field": "code:303",
            "description": "<p>Fail to resize image.</p>"
          },
          {
            "group": "HTTP-500",
            "optional": false,
            "field": "code:304",
            "description": "<p>Fail to resize image.</p>"
          },
          {
            "group": "HTTP-500",
            "optional": false,
            "field": "code:305",
            "description": "<p>Invalid parameter.</p>"
          },
          {
            "group": "HTTP-500",
            "optional": false,
            "field": "code:306",
            "description": "<p>Fail to process image.</p>"
          },
          {
            "group": "HTTP-500",
            "optional": false,
            "field": "code:307",
            "description": "<p>Fail to process image.</p>"
          },
          {
            "group": "HTTP-500",
            "optional": false,
            "field": "code:308",
            "description": "<p>Fail to resize image</p>"
          },
          {
            "group": "HTTP-500",
            "optional": false,
            "field": "code:309",
            "description": "<p>Fail to process image</p>"
          },
          {
            "group": "HTTP-500",
            "optional": false,
            "field": "code:310",
            "description": "<p>Fail to process image</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "[401] Error-Response:",
          "content": "HTTP/1.1 401 Unauthorized\n\n{\n    \"result\":\"fail\",\n    \"code\":5xx,\n    \"error_description\":\"Unauthorized access\"\n}",
          "type": "json"
        },
        {
          "title": "[500] Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n\n{\n    \"result\":\"fail\",\n    \"code\":3xx,\n    \"error_description\":\"some error message\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/place.php",
    "groupTitle": "Place"
  },
  {
    "version": "1.0.0",
    "type": "get",
    "url": "/eattogether/user/list",
    "title": "Get all member list with search keyword.",
    "name": "GetMemberList",
    "group": "User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "HTTP-attribute",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Resource owner's access token.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "GET /eattogether/user/list?sk=keywd HTTP/1.1\nHost: api.hangaround.tw\nAccept: * / *\nAuthorization: Bearer d5768df446cc325b3d08aa861f675d9f4b5486a7\nContent-Type: application/x-www-form-urlencoded",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sk",
            "description": "<p>Search keyword for member's name or email.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>Query result(success/fail).</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": "<p>Code of API access result.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "count",
            "description": "<p>Number of results</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "results",
            "description": "<p>Query member list results.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "results:id",
            "description": "<p>User id.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "results:username",
            "description": "<p>User name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "results:status",
            "description": "<p>User status(normal: user not invited yet, invited: invited user, reverse: user who invite resource owner).</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "results:headimg",
            "description": "<p>User's head image url.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\nContent-Type: application/json; charset=utf-8\n\n{\n    \"result\":\"success\",\n    \"code\":200,\n    \"count\":4,\n    \"results\":[\n        {\n            \"id\":\"8\",\n            \"username\":\"user1\",\n            \"status\":\"invited\",\n            \"headimg\":\"https://api.hangaround.tw/eattogether/user/headimg/281dee7db2cf9d272f93516c79d041b489836f1b1af27e9794fb768bc857b301_sqr_150.jpg\"\n        },\n        {\n            \"id\":\"50\",\n            \"username\":\"user2\",\n            \"status\":\"normal\",\n            \"headimg\":\"https://api.hangaround.tw/eattogether/user/headimg/281dee7db2cf9d272f93516c79d041b489836f1b1af27e9794fb768bc857b302_sqr_150.jpg\"\n        },\n        {\n            \"id\":\"51\",\n            \"username\":\"user3\",\n            \"status\":\"normal\",\n            \"headimg\":\"https://api.hangaround.tw/eattogether/user/headimg/281dee7db2cf9d272f93516c79d041b489836f1b1af27e9794fb768bc857b303_sqr_150.jpg\"\n        },\n        {\n            \"id\":\"53\",\n            \"username\":\"user4\",\n            \"status\":\"reverse\",\n            \"headimg\":\"https://api.hangaround.tw/eattogether/user/headimg/281dee7db2cf9d272f93516c79d041b489836f1b1af27e9794fb768bc857b304_sqr_150.jpg\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "HTTP Status Code": [
          {
            "group": "HTTP Status Code",
            "optional": false,
            "field": "200",
            "description": "<p>No users that can invite.</p>"
          },
          {
            "group": "HTTP Status Code",
            "optional": false,
            "field": "401",
            "description": "<p>Unauthorized access.</p>"
          },
          {
            "group": "HTTP Status Code",
            "optional": false,
            "field": "500",
            "description": "<p>Fail to retrieve user list.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "[200] Error-Response:",
          "content": "HTTP/1.1 200 OK\nContent-Type: application/json; charset=utf-8\n\n{\n    \"result\":\"fail\",\n    \"code\":201,\n    \"error_description\":\"Empty query result\"\n}",
          "type": "json"
        },
        {
          "title": "[401] Error-Response:",
          "content": "HTTP/1.1 401 Unauthorized\n\n{\n    \"result\":\"fail\",\n    \"code\":505,\n    \"error_description\":\"Unauthorized access\"\n}",
          "type": "json"
        },
        {
          "title": "[500] Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n\n{\n    \"result\":\"fail\",\n    \"code\":500,\n    \"error_description\":\"Fail to retrieve user list\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/user.php",
    "groupTitle": "User"
  },
  {
    "version": "1.0.0",
    "type": "get",
    "url": "/eattogether/user/invites",
    "title": "List User's friend invites.",
    "name": "GetUserFriendInvites",
    "group": "User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "HTTP-attribute",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Resource owner's access token.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "GET /eattogether/user/invites HTTP/1.1\nHost: api.hangaround.tw\nAccept: * / *\nAuthorization: Bearer d5768df446cc325b3d08aa861f675d9f4b5486a7\nContent-Type: application/x-www-form-urlencoded",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>Query result(success/fail).</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": "<p>Code of API access result.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "count",
            "description": "<p>Number of friend invites.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "results",
            "description": "<p>Array of friend invites(user_id, username).</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\nContent-Type: application/json; charset=utf-8\n\n{\n    \"result\":\"success\",\n    \"code\":200,\n    \"count\":2,\n    \"results\": [\n        {\"id\":\"12\",\"username\":\"user1\"},\n        {\"id\":\"13\",\"username\":\"user2\"}\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "HTTP Status Code": [
          {
            "group": "HTTP Status Code",
            "optional": false,
            "field": "200",
            "description": "<p>No friend invites for this user.</p>"
          },
          {
            "group": "HTTP Status Code",
            "optional": false,
            "field": "401",
            "description": "<p>Unauthorized access.</p>"
          },
          {
            "group": "HTTP Status Code",
            "optional": false,
            "field": "500",
            "description": "<p>Fail to retrieve invite list.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "[200] Error-Response:",
          "content": "HTTP/1.1 200 OK\nContent-Type: application/json; charset=utf-8\n\n{\n    \"result\":\"fail\",\n    \"code\":201,\n    \"error_description\":\"Empty query result\"\n}",
          "type": "json"
        },
        {
          "title": "[401] Error-Response:",
          "content": "HTTP/1.1 401 Unauthorized\n\n{\n    \"result\":\"fail\",\n    \"code\":505,\n    \"error_description\":\"Unauthorized access\"\n}",
          "type": "json"
        },
        {
          "title": "[500] Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n\n{\n    \"result\":\"fail\",\n    \"code\":500,\n    \"error_description\":\"Fail to retrieve invite list\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/user.php",
    "groupTitle": "User"
  },
  {
    "version": "1.0.0",
    "type": "get",
    "url": "/eattogether/user/headimg/:filename",
    "title": "Request User head image",
    "name": "GetUserHeadImg",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "filename",
            "description": "<p>Users head image file name.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Binary",
            "optional": false,
            "field": "image",
            "description": "<p>User's head image.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\nContent-Type: image/jpeg\n\n[Binary Data]",
          "type": "json"
        }
      ]
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "HTTP-date",
            "optional": false,
            "field": "If-Modified-Since",
            "description": "<p>Check the file has not been modified since the time specified.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "GET /eattogether/user/headimg/5d232873a2df1a292cc511279fdc380486cd57f146a47e6a3afcc340f3294e3a_sqr_150.jpg HTTP/1.1\nHost: api.hangaround.tw\nAccept: * / *\nIf-Modified-Since: Sat, 29 Oct 1994 19:43:31 GMT\nContent-Type: application/x-www-form-urlencoded",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "HTTP Status Code": [
          {
            "group": "HTTP Status Code",
            "optional": false,
            "field": "304",
            "description": "<p>The user's head image was not modified.</p>"
          },
          {
            "group": "HTTP Status Code",
            "optional": false,
            "field": "404",
            "description": "<p>The user's head image was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "[304] Error-Response:",
          "content": "HTTP/1.1 304 Not Modified",
          "type": "json"
        },
        {
          "title": "[404] Error-Response:",
          "content": "HTTP/1.1 404 Not Found",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/user.php",
    "groupTitle": "User"
  },
  {
    "version": "1.0.0",
    "type": "get",
    "url": "/eattogether/user/profile",
    "title": "Get User's profile.",
    "name": "GetUserProfile",
    "group": "User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "HTTP-attribute",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Resource owner's access token.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "GET /eattogether/user/profile\nHost: api.hangaround.tw\nAccept: * / *\nAuthorization: Bearer d5768df446cc325b3d08aa861f675d9f4b5486a7\nContent-Type: application/x-www-form-urlencoded",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>Query result(success/fail).</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": "<p>Code of API access result.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "results",
            "description": "<p>User profile object.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "results:id",
            "description": "<p>User id.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "results:username",
            "description": "<p>User name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "results:email",
            "description": "<p>User email.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "results:status",
            "description": "<p>User status(fb_user: Facebook user, proved: Verified user, unproved: Unverified user).</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "results:create_time",
            "description": "<p>User register time.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "results:lastmod",
            "description": "<p>User last modified time.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "results:headimg",
            "description": "<p>User's head image url.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\nContent-Type: application/json; charset=utf-8\n\n{\n    \"result\":\"success\",\n    \"code\":200,\n    \"results\": {\n        \"id\":\"187\",\n        \"username\":\"Tsung-Yu Li\",\n        \"email\":\"1472502696396688@hangaround.tw\",\n        \"status\":\"fb_user\",\n        \"create_time\":\"2015-08-20 21:04:30\",\n        \"lastmod\":\"2015-10-24 16:59:15\",\n        \"headimg\":\"https://api.hangaround.tw/eattogether/user/headimg/281dee7db2cf9d272f93516c79d041b489836f1b1af27e9794fb768bc857b301_sqr_150.jpg\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "HTTP Status Code": [
          {
            "group": "HTTP Status Code",
            "optional": false,
            "field": "200",
            "description": "<p>No user profile found.</p>"
          },
          {
            "group": "HTTP Status Code",
            "optional": false,
            "field": "401",
            "description": "<p>Unauthorized access.</p>"
          },
          {
            "group": "HTTP Status Code",
            "optional": false,
            "field": "500",
            "description": "<p>Fail to retrieve user profile.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "[200] Error-Response:",
          "content": "HTTP/1.1 200 OK\nContent-Type: application/json; charset=utf-8\n\n{\n    \"result\":\"fail\",\n    \"code\":201,\n    \"error_description\":\"Empty query result\"\n}",
          "type": "json"
        },
        {
          "title": "[401] Error-Response:",
          "content": "HTTP/1.1 401 Unauthorized\n\n{\n    \"result\":\"fail\",\n    \"code\":505,\n    \"error_description\":\"Unauthorized access\"\n}",
          "type": "json"
        },
        {
          "title": "[500] Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n\n{\n    \"result\":\"fail\",\n    \"code\":500,\n    \"error_description\":\"Fail to retrieve user profile\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/user.php",
    "groupTitle": "User"
  },
  {
    "version": "1.0.0",
    "type": "post",
    "url": "/eattogether/user/addheadimg",
    "title": "Upload User's head image.",
    "name": "UploadUserHeadImage",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Binary",
            "optional": false,
            "field": "img",
            "description": "<p>The upload image binary data.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>Query result(success/fail).</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": "<p>Code of API access result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\nContent-Type: application/json; charset=utf-8\n\n{\n    \"result\":\"success\",\n    \"code\":200\n}",
          "type": "json"
        }
      ]
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "HTTP-attribute",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Resource owner's access token.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "POST /eattogether/user/addheadimg HTTP/1.1\nHost: api.hangaround.tw\nAccept: * / *\nAuthorization: Bearer d5768df446cc325b3d08aa861f675d9f4b5486a7\nContent-Type: multipart/form-data; boundary=----WebKitFormBoundaryePkpFF7tjBAqx29L\n\n------WebKitFormBoundaryePkpFF7tjBAqx29L\nContent-Disposition: form-data; name=\"img\"; filename=\"headimg.png\"\nContent-Type: image/png\n\n[Binary Data]\n------WebKitFormBoundaryePkpFF7tjBAqx29L--",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "HTTP Status Code": [
          {
            "group": "HTTP Status Code",
            "optional": false,
            "field": "401",
            "description": "<p>Unauthorized access.</p>"
          },
          {
            "group": "HTTP Status Code",
            "optional": false,
            "field": "500",
            "description": "<p>Fail to upload head image.</p>"
          }
        ],
        "HTTP-500": [
          {
            "group": "HTTP-500",
            "optional": false,
            "field": "code:300",
            "description": "<p>Unknown exception.</p>"
          },
          {
            "group": "HTTP-500",
            "optional": false,
            "field": "code:301",
            "description": "<p>Upload error.</p>"
          },
          {
            "group": "HTTP-500",
            "optional": false,
            "field": "code:302",
            "description": "<p>Fail to crop square image.</p>"
          },
          {
            "group": "HTTP-500",
            "optional": false,
            "field": "code:303",
            "description": "<p>Fail to crop square image.</p>"
          },
          {
            "group": "HTTP-500",
            "optional": false,
            "field": "code:304",
            "description": "<p>Fail to crop square image.</p>"
          },
          {
            "group": "HTTP-500",
            "optional": false,
            "field": "code:305",
            "description": "<p>Fail to resize image.</p>"
          },
          {
            "group": "HTTP-500",
            "optional": false,
            "field": "code:306",
            "description": "<p>Fail to resize image.</p>"
          },
          {
            "group": "HTTP-500",
            "optional": false,
            "field": "code:307",
            "description": "<p>Fail to process image.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "[401] Error-Response:",
          "content": "HTTP/1.1 401 Unauthorized\n\n{\n    \"result\":\"fail\",\n    \"code\":505,\n    \"error_description\":\"Unauthorized access\"\n}",
          "type": "json"
        },
        {
          "title": "[500] Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n\n{\n    \"result\":\"fail\",\n    \"code\":3xx,\n    \"error_description\":\"some error message\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/user.php",
    "groupTitle": "User"
  },
  {
    "version": "1.0.0",
    "type": "post",
    "url": "/eattogether/vote/add/date",
    "title": "Create an vote.",
    "name": "AddOneVote",
    "group": "Vote",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "aid",
            "description": "<p>Id of Activity which to create vote.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Resource owner's access token.</p>"
          },
          {
            "group": "Parameter",
            "type": "JSON",
            "optional": false,
            "field": "data",
            "description": "<p>Content about the vote.</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "data:dates",
            "description": "<p>The dates to vote.</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "data:times",
            "description": "<p>The times to vote.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "data:times:alias",
            "description": "<p>The alias name of this time section.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "data:times:start",
            "description": "<p>The start time of this time section.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "data:times:interval",
            "description": "<p>The end time of this time section.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>Query result(success/fail).</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": "<p>Code of API access result.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_description",
            "description": "<p>Error message.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\nContent-Type: application/json; charset=utf-8\n\n{\n    \"result\":\"success\",\n    \"code\":200\n}",
          "type": "json"
        }
      ]
    },
    "header": {
      "examples": [
        {
          "title": "Add-Activity:",
          "content": "POST /eattogether/vote/add/date HTTP/1.1\nHost: api.hangaround.tw\nAccept: * / *\nContent-Type: application/x-www-form-urlencoded\n\naid=12\n&data={\"dates\":[\"2016-02-29\",\"2016-03-18\"],\"times\":[{\"alias\":\"lunch\",\"start\":\"11:30:00\",\"end\":\"14:00:00\"},{\"alias\":\"dinner\",\"start\":\"18:30:00\",\"end\":\"21:00:00\"}]}\n&access_token=d5768df446cc325b3d08aa861f675d9f4b5486a7",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "HTTP Status Code": [
          {
            "group": "HTTP Status Code",
            "optional": false,
            "field": "HTTP-401",
            "description": "<p>Unauthorized access.</p>"
          },
          {
            "group": "HTTP Status Code",
            "optional": false,
            "field": "HTTP-500",
            "description": "<p>Internal Server Error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "[HTTP-401] Error-Response:",
          "content": "HTTP/1.1 401 Unauthorized",
          "type": "json"
        },
        {
          "title": "[HTTP-500] Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n\n{\n    \"result\":\"fail\",\n    \"code\":5xx,\n    \"error_description\":\"some error message\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/vote.php",
    "groupTitle": "Vote"
  },
  {
    "version": "1.0.0",
    "type": "get",
    "url": "/eattogether/vote/dovote/:vote_token",
    "title": "***Do an vote.",
    "name": "DoVote",
    "group": "Vote",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vote_token",
            "description": "<p>Activity vote token.</p>"
          }
        ]
      }
    },
    "filename": "controllers/vote.php",
    "groupTitle": "Vote"
  },
  {
    "version": "1.0.0",
    "type": "get",
    "url": "/eattogether/vote/result/:vote_token",
    "title": "***Get vote result.",
    "name": "GetVoteResult",
    "group": "Vote",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vote_token",
            "description": "<p>Activity vote token.</p>"
          }
        ]
      }
    },
    "filename": "controllers/vote.php",
    "groupTitle": "Vote"
  },
  {
    "version": "1.0.0",
    "type": "get",
    "url": "/eattogether/vote/query/:vote_token",
    "title": "***Query an vote.",
    "name": "QueryVote",
    "group": "Vote",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "HTTP-attribute",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Resource owner's access token.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vote_token",
            "description": "<p>Activity vote token.</p>"
          }
        ]
      }
    },
    "filename": "controllers/vote.php",
    "groupTitle": "Vote"
  },
  {
    "version": "1.0.0",
    "type": "get",
    "url": "/eattogether/vote/query_time",
    "title": "Get activity time intervals.",
    "name": "queryTime",
    "group": "Vote",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>Query result(success/fail).</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": "<p>Code of API access result.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "count",
            "description": "<p>Number of results</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "results",
            "description": "<p>Query activity list results.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "results:alias",
            "description": "<p>Name of time section.</p>"
          },
          {
            "group": "Success 200",
            "type": "Time",
            "optional": false,
            "field": "results:start",
            "description": "<p>Start time of time section.</p>"
          },
          {
            "group": "Success 200",
            "type": "Time",
            "optional": false,
            "field": "results:end",
            "description": "<p>End time of time section.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_description",
            "description": "<p>Error message.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\nContent-Type: application/json; charset=utf-8\n\n{\n    \"result\":\"success\",\n    \"code\":200,\n    \"count\":6,\n    \"results\":[\n        {\n            \"alias\":\"早餐\",\n            \"start\":\"07:00:00\",\n            \"end\":\"10:00:00\"\n        },\n        {\n            \"alias\":\"午餐\",\n            \"start\":\"12:00:00\",\n            \"end\":\"14:00:00\"\n        },\n        {\n            \"alias\":\"早午餐\",\n            \"start\":\"11:00:00\",\n            \"end\":\"14:00:00\"\n        },\n        {\n            \"alias\":\"下午茶\",\n            \"start\":\"14:30:00\",\n            \"end\":\"16:30:00\"\n        },\n        {\n            \"alias\":\"晚餐\",\n            \"start\":\"18:00:00\",\n            \"end\":\"21:00:00\"\n        },\n        {\n            \"alias\":\"宵夜\",\n            \"start\":\"21:00:00\",\n            \"end\":\"24:00:00\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "HTTP-attribute",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Resource owner's access token.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "GET /eattogether/vote/query_time HTTP/1.1\nHost: api.hangaround.tw\nAccept: * / *\nAuthorization: Bearer d5768df446cc325b3d08aa861f675d9f4b5486a7\nContent-Type: application/x-www-form-urlencoded",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "HTTP Status Code": [
          {
            "group": "HTTP Status Code",
            "optional": false,
            "field": "HTTP-200",
            "description": "<p>Empty query result.</p>"
          },
          {
            "group": "HTTP Status Code",
            "optional": false,
            "field": "401",
            "description": "<p>Unauthorized access.</p>"
          },
          {
            "group": "HTTP Status Code",
            "optional": false,
            "field": "500",
            "description": "<p>Internal Server Error.</p>"
          }
        ],
        "HTTP-401": [
          {
            "group": "HTTP-401",
            "optional": false,
            "field": "code:502",
            "description": "<p>Unauthorized access.</p>"
          }
        ],
        "HTTP-500": [
          {
            "group": "HTTP-500",
            "optional": false,
            "field": "code:300",
            "description": "<p>Unknown exception.</p>"
          },
          {
            "group": "HTTP-500",
            "optional": false,
            "field": "code:301",
            "description": "<p>Fail to get time sections.</p>"
          },
          {
            "group": "HTTP-500",
            "optional": false,
            "field": "code:302",
            "description": "<p>Fail to get time sections.</p>"
          },
          {
            "group": "HTTP-500",
            "optional": false,
            "field": "code:399",
            "description": "<p>Unknown error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "[HTTP-200] Error-Response:",
          "content": "HTTP/1.1 200 OK\nContent-Type: application/json; charset=utf-8\n\n{\n    \"result\":\"fail\",\n    \"code\":201,\n    \"error_description\":\"Empty query result\"\n}",
          "type": "json"
        },
        {
          "title": "[HTTP-401] Error-Response:",
          "content": "HTTP/1.1 401 Unauthorized",
          "type": "json"
        },
        {
          "title": "[HTTP-500] Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n\n{\n    \"result\":\"fail\",\n    \"code\":3xx,\n    \"error_description\":\"some error message\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/vote.php",
    "groupTitle": "Vote"
  }
] });
