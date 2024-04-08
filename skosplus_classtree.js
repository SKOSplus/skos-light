var tree={
  "plugins": [
    "defaults",
    "search",
    "sort",
    "state",
    "types",
    "contextmenu"
  ],
  "search": {
    "show_only_matches": true
  },
  "types": {
    "class": {
      "icon": "https://cdn.jsdelivr.net/gh/i3mainz/geopubby@master/public/icons/class.png"
    },
    "geoclass": {
      "icon": "https://cdn.jsdelivr.net/gh/i3mainz/geopubby@master/public/icons/geoclass.png"
    },
    "halfgeoclass": {
      "icon": "https://cdn.jsdelivr.net/gh/i3mainz/geopubby@master/public/icons/halfgeoclass.png"
    },
    "collectionclass": {
      "icon": "https://cdn.jsdelivr.net/gh/i3mainz/geopubby@master/public/icons/collectionclass.png"
    },
    "geocollection": {
      "icon": "https://cdn.jsdelivr.net/gh/i3mainz/geopubby@master/public/icons/geometrycollection.png"
    },
    "featurecollection": {
      "icon": "https://cdn.jsdelivr.net/gh/i3mainz/geopubby@master/public/icons/featurecollection.png"
    },
    "instance": {
      "icon": "https://cdn.jsdelivr.net/gh/i3mainz/geopubby@master/public/icons/instance.png"
    },
    "geoinstance": {
      "icon": "https://cdn.jsdelivr.net/gh/i3mainz/geopubby@master/public/icons/geoinstance.png"
    }
  },
  "core": {
    "themes": {
      "responsive": true
    },
    "check_callback": true,
    "data": [
      {
        "id": "http://skosplus.net/skos-light/hasRelatedLabel",
        "parent": "http://www.w3.org/2002/07/owl#SymmetricProperty",
        "type": "instance",
        "text": "has related label (:hasRelatedLabel)",
        "data": {}
      },
      {
        "id": "http://www.w3.org/2004/02/skos/core#closeMatch",
        "parent": "http://www.w3.org/2002/07/owl#SymmetricProperty",
        "type": "instance",
        "text": "closeMatch (skos:closeMatch)",
        "data": {}
      },
      {
        "id": "http://www.w3.org/2004/02/skos/core#exactMatch_suniv0_",
        "parent": "http://www.w3.org/2002/07/owl#SymmetricProperty",
        "type": "instance",
        "text": "exactMatch (skos:exactMatch)",
        "data": {}
      },
      {
        "id": "http://skosplus.net/skos-light/nonns_related.html",
        "parent": "http://www.w3.org/2002/07/owl#SymmetricProperty",
        "type": "instance",
        "text": "related (skos:related)",
        "data": {}
      },
      {
        "id": "http://www.w3.org/2004/02/skos/core#relatedMatch",
        "parent": "http://www.w3.org/2002/07/owl#SymmetricProperty",
        "type": "instance",
        "text": "relatedMatch (skos:relatedMatch)",
        "data": {}
      },
      {
        "id": "http://www.w3.org/2002/07/owl#SymmetricProperty",
        "parent": "#",
        "type": "class",
        "text": "SymmetricProperty (owl:SymmetricProperty) [5]",
        "data": {
          "to": {
            "http://rdfs.org/ns/void#inDataset": {
              "instancecount": 1,
              "http://rdfs.org/ns/void#Dataset": 1,
              "http://www.w3.org/ns/adms#Asset": 1
            },
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#subPropertyOf": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#ObjectProperty": 1,
              "http://www.w3.org/2002/07/owl#SymmetricProperty": 1
            }
          },
          "from": {}
        },
        "instancecount": 5
      },
      {
        "id": "http://skosplus.net/skos-light/hasSubLabel",
        "parent": "http://www.w3.org/2002/07/owl#TransitiveProperty",
        "type": "instance",
        "text": "has sub label (:hasSubLabel)",
        "data": {}
      },
      {
        "id": "http://skosplus.net/skos-light/hasSuperLabel",
        "parent": "http://www.w3.org/2002/07/owl#TransitiveProperty",
        "type": "instance",
        "text": "has super label (:hasSuperLabel)",
        "data": {}
      },
      {
        "id": "http://www.w3.org/2004/02/skos/core#broadMatch",
        "parent": "http://www.w3.org/2002/07/owl#TransitiveProperty",
        "type": "instance",
        "text": "broadMatch (skos:broadMatch)",
        "data": {}
      },
      {
        "id": "http://skosplus.net/skos-light/nonns_broader.html",
        "parent": "http://www.w3.org/2002/07/owl#TransitiveProperty",
        "type": "instance",
        "text": "broader (skos:broader)",
        "data": {}
      },
      {
        "id": "http://www.w3.org/2004/02/skos/core#broaderTransitive",
        "parent": "http://www.w3.org/2002/07/owl#TransitiveProperty",
        "type": "instance",
        "text": "broaderTransitive (skos:broaderTransitive)",
        "data": {}
      },
      {
        "id": "http://www.w3.org/2004/02/skos/core#exactMatch_suniv1_",
        "parent": "http://www.w3.org/2002/07/owl#TransitiveProperty",
        "type": "instance",
        "text": "exactMatch (skos:exactMatch)",
        "data": {}
      },
      {
        "id": "http://www.w3.org/2004/02/skos/core#narrowMatch",
        "parent": "http://www.w3.org/2002/07/owl#TransitiveProperty",
        "type": "instance",
        "text": "narrowMatch (skos:narrowMatch)",
        "data": {}
      },
      {
        "id": "http://skosplus.net/skos-light/nonns_narrower.html",
        "parent": "http://www.w3.org/2002/07/owl#TransitiveProperty",
        "type": "instance",
        "text": "narrower (skos:narrower)",
        "data": {}
      },
      {
        "id": "http://www.w3.org/2004/02/skos/core#narrowerTransitive",
        "parent": "http://www.w3.org/2002/07/owl#TransitiveProperty",
        "type": "instance",
        "text": "narrowerTransitive (skos:narrowerTransitive)",
        "data": {}
      },
      {
        "id": "http://www.w3.org/2002/07/owl#TransitiveProperty",
        "parent": "#",
        "type": "class",
        "text": "TransitiveProperty (owl:TransitiveProperty) [9]",
        "data": {
          "to": {
            "http://rdfs.org/ns/void#inDataset": {
              "instancecount": 1,
              "http://rdfs.org/ns/void#Dataset": 1,
              "http://www.w3.org/ns/adms#Asset": 1
            },
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#subPropertyOf": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#ObjectProperty": 1,
              "http://www.w3.org/2002/07/owl#TransitiveProperty": 1
            }
          },
          "from": {}
        },
        "instancecount": 5
      },
      {
        "id": "http://skosplus.net/skos-light/nonns_Label.html",
        "parent": "http://www.w3.org/2004/02/skos2/core#Concept",
        "type": "class",
        "text": "Labeling System Label (ls:Label)",
        "data": {
          "to": {
            "http://rdfs.org/ns/void#inDataset": {
              "instancecount": 1,
              "http://rdfs.org/ns/void#Dataset": 1,
              "http://www.w3.org/ns/adms#Asset": 1
            },
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#subClassOf": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#Class": 1
            }
          },
          "from": {
            "http://rdfs.org/ns/void#class": {
              "instancecount": 0,
              "http://rdfs.org/ns/void#Dataset": 1
            }
          }
        },
        "instancecount": 4
      },
      {
        "id": "http://skosplus.net/skos-light/nonns_Concept.html",
        "parent": "#",
        "type": "class",
        "text": "Concept (skoso:Concept)",
        "data": {
          "to": {
            "http://rdfs.org/ns/void#inDataset": {
              "instancecount": 1,
              "http://rdfs.org/ns/void#Dataset": 1,
              "http://www.w3.org/ns/adms#Asset": 1
            },
            "http://skosplus.net/skos-light/hasType": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#subClassOf": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#Class": 1
            }
          },
          "from": {
            "http://rdfs.org/ns/void#class": {
              "instancecount": 0,
              "http://rdfs.org/ns/void#Dataset": 1
            },
            "http://skosplus.net/skos-light/hasType": {
              "instancecount": 0,
              "http://www.w3.org/2002/07/owl#Class": 1
            }
          }
        },
        "instancecount": 5
      },
      {
        "id": "http://skosplus.net/skos-light/nonns_Vocabulary.html",
        "parent": "http://www.w3.org/2004/02/skos/core#ConceptScheme",
        "type": "class",
        "text": "Labeling System Vocabulary (ls:Vocabulary)",
        "data": {
          "to": {
            "http://rdfs.org/ns/void#inDataset": {
              "instancecount": 1,
              "http://rdfs.org/ns/void#Dataset": 1,
              "http://www.w3.org/ns/adms#Asset": 1
            },
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#subClassOf": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#Class": 1
            }
          },
          "from": {
            "http://rdfs.org/ns/void#class": {
              "instancecount": 0,
              "http://rdfs.org/ns/void#Dataset": 1
            }
          }
        },
        "instancecount": 4
      },
      {
        "id": "http://www.w3.org/2004/02/skos/core#ConceptScheme",
        "parent": "#",
        "type": "class",
        "text": "ConceptScheme (skos:ConceptScheme)",
        "data": {}
      },
      {
        "id": "http://skosplus.net/skos-light/Label",
        "parent": "http://labeling.link/docs/ls/core#Label",
        "type": "class",
        "text": "Label (:Label)",
        "data": {}
      },
      {
        "id": "http://skosplus.net/skos-light/StructualConcept",
        "parent": "http://www.w3.org/2004/02/skos2/core#Concept",
        "type": "class",
        "text": "StructualConcept (:StructualConcept)",
        "data": {}
      },
      {
        "id": "http://skosplus.net/skos-light/Vocabulary",
        "parent": "http://labeling.link/docs/ls/core#Vocabulary",
        "type": "class",
        "text": "Vocabulary (:Vocabulary)",
        "data": {}
      }
    ]
  },
  "@context": {
    "@version": 1.1,
    "foaf": "http://xmlns.com/foaf/0.1/",
    "ct": "http://purl.org/vocab/classtree#",
    "rdfs": "http://www.w3.org/2000/01/rdf-schema#",
    "icon": "foaf:image",
    "id": "@id",
    "parent": "rdfs:subClassOf",
    "halfgeoclass": "ct:HalfGeoClass",
    "geoclass": {
      "@type": "ct:icontype",
      "@id": "ct:GeoClass"
    },
    "collectionclass": {
      "@type": "ct:icontype",
      "@id": "ct:CollectionClass"
    },
    "featurecollectionclass": {
      "@type": "ct:icontype",
      "@id": "ct:FeatureCollectionClass"
    },
    "class": "owl:Class",
    "instance": "owl:NamedIndividual",
    "geoinstance": {
      "@type": "ct:Icontype",
      "@id": "ct:GeoNamedIndividual"
    },
    "text": "rdfs:label",
    "type": "ct:icontype",
    "types": "ct:icontypes",
    "core": {
      "@type": "ct:TreeConfig",
      "@id": "@nest"
    },
    "data": {
      "@id": "ct:treeitem",
      "@type": "ct:TreeItem"
    }
  }
}