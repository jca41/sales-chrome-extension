export const getRewriteRulesForLocalhost = (host, proposition) => {
  return   [
    {
      "id": 1,
      "priority": 1,
      "action": {
        "type": "modifyHeaders",
        "responseHeaders": [
          {
            "header": "access-control-allow-origin",
            "operation": "set",
            "value": host
          }
        ]
      },
      "condition": {
        "urlFilter": `sas.stable-int.${proposition}.com`,
        "resourceTypes": [
          "xmlhttprequest"
        ],
        "initiatorDomains": [
          `local.${proposition}.com`
        ]
      }
    },
    {
      "id": 2,
      "priority": 1,
      "action": {
        "type": "modifyHeaders",
        "requestHeaders": [
          {
            "header": "origin",
            "operation": "set",
            "value": `https://www.stable-int.${proposition}.com`
          }
        ],
        "responseHeaders": [
          {
            "header": "access-control-allow-origin",
            "operation": "set",
            "value": host
          }
        ]
      },
      "condition": {
        "urlFilter": `*.id.stable-int.${proposition}.com`,
        "resourceTypes": [
          "xmlhttprequest"
        ],
        "initiatorDomains": [
          `local.${proposition}.com`
        ]
      }
    },
    {
      "id": 3,
      "priority": 1,
      "action": {
        "type": "modifyHeaders",
        "responseHeaders": [
          {
            "header": "access-control-allow-origin",
            "operation": "set",
            "value": host
          }
        ]
      },
      "condition": {
        "urlFilter": `ovp.stable-int.${proposition}.com`,
        "resourceTypes": [
          "xmlhttprequest"
        ],
        "initiatorDomains": [
          `local.${proposition}.com`
        ]
      }
    }
  ]
}