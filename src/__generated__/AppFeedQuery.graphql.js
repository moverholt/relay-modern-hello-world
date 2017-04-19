/**
 * This file was generated by:
 *   relay-compiler
 *
 * @providesModule AppFeedQuery.graphql
 * @generated SignedSource<<3e3bf187ca55521cb6ac257dccc1d86d>>
 * @relayHash d6085cdf32b7ece02c29adc43f206a47
 * @flow
 * @nogrep
 */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';

*/

/* eslint-disable comma-dangle, quotes */

/*
query AppFeedQuery {
  feed(type: NEW, limit: 5) {
    repository {
      owner {
        login
      }
      name
      stargazers_count
    }
    postedBy {
      login
    }
  }
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "AppFeedQuery",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Literal",
            "name": "limit",
            "value": 5,
            "type": "Int"
          },
          {
            "kind": "Literal",
            "name": "type",
            "value": "NEW",
            "type": "FeedType!"
          }
        ],
        "concreteType": "Entry",
        "name": "feed",
        "plural": true,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "Repository",
            "name": "repository",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "args": null,
                "concreteType": "User",
                "name": "owner",
                "plural": false,
                "selections": [
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "login",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "name",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "stargazers_count",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "User",
            "name": "postedBy",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "login",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": "feed{\"limit\":5,\"type\":\"NEW\"}"
      }
    ],
    "type": "Query"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "AppFeedQuery",
  "query": {
    "argumentDefinitions": [],
    "kind": "Root",
    "name": "AppFeedQuery",
    "operation": "query",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Literal",
            "name": "limit",
            "value": 5,
            "type": "Int"
          },
          {
            "kind": "Literal",
            "name": "type",
            "value": "NEW",
            "type": "FeedType!"
          }
        ],
        "concreteType": "Entry",
        "name": "feed",
        "plural": true,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "Repository",
            "name": "repository",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "args": null,
                "concreteType": "User",
                "name": "owner",
                "plural": false,
                "selections": [
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "login",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "name",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "stargazers_count",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "User",
            "name": "postedBy",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "login",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": "feed{\"limit\":5,\"type\":\"NEW\"}"
      }
    ]
  },
  "text": "query AppFeedQuery {\n  feed(type: NEW, limit: 5) {\n    repository {\n      owner {\n        login\n      }\n      name\n      stargazers_count\n    }\n    postedBy {\n      login\n    }\n  }\n}\n"
};

module.exports = batch;
