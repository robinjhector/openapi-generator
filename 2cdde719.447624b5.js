(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{165:function(t,e,a){"use strict";a.r(e),a.d(e,"frontMatter",(function(){return l})),a.d(e,"metadata",(function(){return c})),a.d(e,"rightToc",(function(){return O})),a.d(e,"default",(function(){return j}));var n=a(1),b=a(9),r=(a(0),a(303)),l={title:"Config Options for cwiki",sidebar_label:"cwiki"},c={id:"generators/cwiki",title:"Config Options for cwiki",description:"| Option | Description | Values | Default |",source:"@site/../docs/generators/cwiki.md",permalink:"/docs/generators/cwiki",editUrl:"https://github.com/OpenAPITools/openapi-generator/edit/master/website/../docs/generators/cwiki.md",lastUpdatedBy:"Ryan Rishi",lastUpdatedAt:1599326524,sidebar_label:"cwiki"},O=[{value:"IMPORT MAPPING",id:"import-mapping",children:[]},{value:"INSTANTIATION TYPES",id:"instantiation-types",children:[]},{value:"LANGUAGE PRIMITIVES",id:"language-primitives",children:[]},{value:"RESERVED WORDS",id:"reserved-words",children:[]},{value:"FEATURE SET",id:"feature-set",children:[{value:"Client Modification Feature",id:"client-modification-feature",children:[]},{value:"Data Type Feature",id:"data-type-feature",children:[]},{value:"Documentation Feature",id:"documentation-feature",children:[]},{value:"Global Feature",id:"global-feature",children:[]},{value:"Parameter Feature",id:"parameter-feature",children:[]},{value:"Schema Support Feature",id:"schema-support-feature",children:[]},{value:"Security Feature",id:"security-feature",children:[]},{value:"Wire Format Feature",id:"wire-format-feature",children:[]}]}],i={rightToc:O};function j(t){var e=t.components,a=Object(b.a)(t,["components"]);return Object(r.b)("wrapper",Object(n.a)({},i,a,{components:e,mdxType:"MDXLayout"}),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Option"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Values"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"allowUnicodeIdentifiers"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"boolean, toggles whether unicode identifiers are allowed in names or not, default is false"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"false")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"appDescription"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"description of the application"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"null")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"appName"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"short name of the application"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"null")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"artifactId"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"artifactId in generated pom.xml. This also becomes part of the generated library's filename"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"null")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"artifactVersion"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"artifact version in generated pom.xml. This also becomes part of the generated library's filename"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"null")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"disallowAdditionalPropertiesIfNotPresent"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Specify the behavior when the 'additionalProperties' keyword is not present in the OAS document. If false: the 'additionalProperties' implementation is compliant with the OAS and JSON schema specifications. If true: when the 'additionalProperties' keyword is not present in a schema, the value of 'additionalProperties' is set to false, i.e. no additional properties are allowed. Note: this mode is not compliant with the JSON schema specification. This is the original openapi-generator behavior.This setting is currently ignored for OAS 2.0 documents:  1) When the 'additionalProperties' keyword is not present in a 2.0 schema, additional properties are NOT allowed.  2) Boolean values of the 'additionalProperties' keyword are ignored. It's as if additional properties are NOT allowed.Note: the root cause are issues #1369 and #1371, which must be resolved in the swagger-parser project."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("dl",null,Object(r.b)("dt",null,Object(r.b)("strong",{parentName:"td"},"false")),Object(r.b)("dd",null,"The 'additionalProperties' implementation is compliant with the OAS and JSON schema specifications."),Object(r.b)("dt",null,Object(r.b)("strong",{parentName:"td"},"true")),Object(r.b)("dd",null,"when the 'additionalProperties' keyword is not present in a schema, the value of 'additionalProperties' is automatically set to false, i.e. no additional properties are allowed. Note: this mode is not compliant with the JSON schema specification. This is the original openapi-generator behavior."))),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"true")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ensureUniqueParams"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Whether to ensure parameter names are unique in an operation (rename parameters that are not)."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"true")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"groupId"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"groupId in generated pom.xml"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"null")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"infoEmail"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"an email address to contact for inquiries about the application"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"null")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"infoUrl"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"a URL where users can get more information about the application"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"null")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"invokerPackage"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"root package for generated code"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"null")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"legacyDiscriminatorBehavior"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"This flag is used by OpenAPITools codegen to influence the processing of the discriminator attribute in OpenAPI documents. This flag has no impact if the OAS document does not use the discriminator attribute. The default value of this flag is set in each language-specific code generator (e.g. Python, Java, go...)using the method toModelName. Note to developers supporting a language generator in OpenAPITools; to fully support the discriminator attribute as defined in the OAS specification 3.x, language generators should set this flag to true by default; however this requires updating the mustache templates to generate a language-specific discriminator lookup function that iterates over {{#mappedModels}} and does not iterate over {{children}}, {{#anyOf}}, or {{#oneOf}}."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("dl",null,Object(r.b)("dt",null,Object(r.b)("strong",{parentName:"td"},"true")),Object(r.b)("dd",null,"The mapping in the discriminator includes descendent schemas that allOf inherit from self and the discriminator mapping schemas in the OAS document."),Object(r.b)("dt",null,Object(r.b)("strong",{parentName:"td"},"false")),Object(r.b)("dd",null,"The mapping in the discriminator includes any descendent schemas that allOf inherit from self, any oneOf schemas, any anyOf schemas, any x-discriminator-values, and the discriminator mapping schemas in the OAS document AND Codegen validates that oneOf and anyOf schemas contain the required discriminator and throws an error if the discriminator is missing."))),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"true")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"licenseInfo"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"a short description of the license"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"null")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"licenseUrl"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"a URL pointing to the full license"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"null")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"prependFormOrBodyParameters"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Add form or body parameters to the beginning of the parameter list."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"false")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"sortModelPropertiesByRequiredFlag"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Sort model properties to place required parameters before optional parameters."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"true")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"sortParamsByRequiredFlag"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Sort method arguments to place required parameters before optional parameters."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"true")))),Object(r.b)("h2",{id:"import-mapping"},"IMPORT MAPPING"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type/Alias"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Imports"))),Object(r.b)("tbody",{parentName:"table"})),Object(r.b)("h2",{id:"instantiation-types"},"INSTANTIATION TYPES"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type/Alias"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Instantiated By"))),Object(r.b)("tbody",{parentName:"table"})),Object(r.b)("h2",{id:"language-primitives"},"LANGUAGE PRIMITIVES"),Object(r.b)("ul",{class:"column-ul"}),Object(r.b)("h2",{id:"reserved-words"},"RESERVED WORDS"),Object(r.b)("ul",{class:"column-ul"}),Object(r.b)("h2",{id:"feature-set"},"FEATURE SET"),Object(r.b)("h3",{id:"client-modification-feature"},"Client Modification Feature"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Supported"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Defined By"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"BasePath"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2717"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ToolingExtension")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Authorizations"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2717"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ToolingExtension")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"UserAgent"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2717"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ToolingExtension")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"MockServer"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2717"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ToolingExtension")))),Object(r.b)("h3",{id:"data-type-feature"},"Data Type Feature"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Supported"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Defined By"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Custom"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2717"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Int32"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2713"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Int64"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2713"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Float"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2713"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Double"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2713"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Decimal"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2713"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ToolingExtension")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"String"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2713"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Byte"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2713"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Binary"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2713"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Boolean"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2713"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Date"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2713"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"DateTime"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2713"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Password"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2713"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"File"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2713"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OAS2")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Array"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2713"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Maps"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2713"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ToolingExtension")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"CollectionFormat"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2713"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OAS2")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"CollectionFormatMulti"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2713"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OAS2")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Enum"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2713"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ArrayOfEnum"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2713"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ToolingExtension")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ArrayOfModel"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2713"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ToolingExtension")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ArrayOfCollectionOfPrimitives"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2713"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ToolingExtension")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ArrayOfCollectionOfModel"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2713"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ToolingExtension")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ArrayOfCollectionOfEnum"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2713"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ToolingExtension")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"MapOfEnum"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2713"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ToolingExtension")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"MapOfModel"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2713"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ToolingExtension")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"MapOfCollectionOfPrimitives"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2713"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ToolingExtension")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"MapOfCollectionOfModel"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2713"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ToolingExtension")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"MapOfCollectionOfEnum"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2713"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ToolingExtension")))),Object(r.b)("h3",{id:"documentation-feature"},"Documentation Feature"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Supported"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Defined By"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Readme"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2717"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ToolingExtension")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Model"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2717"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ToolingExtension")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Api"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2717"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ToolingExtension")))),Object(r.b)("h3",{id:"global-feature"},"Global Feature"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Supported"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Defined By"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Host"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2713"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"BasePath"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2713"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Info"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2713"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Schemes"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2717"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"PartialSchemes"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2713"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Consumes"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2713"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OAS2")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Produces"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2713"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OAS2")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ExternalDocumentation"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2713"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Examples"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2713"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"XMLStructureDefinitions"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2717"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"MultiServer"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2717"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OAS3")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ParameterizedServer"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2717"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OAS3")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ParameterStyling"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2717"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OAS3")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Callbacks"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2713"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OAS3")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"LinkObjects"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2717"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OAS3")))),Object(r.b)("h3",{id:"parameter-feature"},"Parameter Feature"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Supported"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Defined By"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Path"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2713"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Query"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2713"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Header"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2713"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Body"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2713"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OAS2")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"FormUnencoded"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2713"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OAS2")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"FormMultipart"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2713"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OAS2")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Cookie"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2717"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OAS3")))),Object(r.b)("h3",{id:"schema-support-feature"},"Schema Support Feature"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Supported"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Defined By"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Simple"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2713"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Composite"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2713"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Polymorphism"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2717"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Union"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2717"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OAS3")))),Object(r.b)("h3",{id:"security-feature"},"Security Feature"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Supported"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Defined By"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"BasicAuth"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2717"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ApiKey"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2717"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OpenIDConnect"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2717"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OAS3")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"BearerToken"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2717"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OAS3")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OAuth2_Implicit"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2717"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OAuth2_Password"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2717"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OAuth2_ClientCredentials"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2717"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OAuth2_AuthorizationCode"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2717"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")))),Object(r.b)("h3",{id:"wire-format-feature"},"Wire Format Feature"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Supported"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Defined By"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"JSON"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2713"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"XML"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2713"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"PROTOBUF"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2717"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ToolingExtension")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Custom"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2713"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")))))}j.isMDXComponent=!0},303:function(t,e,a){"use strict";a.d(e,"a",(function(){return p})),a.d(e,"b",(function(){return o}));var n=a(0),b=a.n(n);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function c(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function O(t,e){if(null==t)return{};var a,n,b=function(t,e){if(null==t)return{};var a,n,b={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(b[a]=t[a]);return b}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(b[a]=t[a])}return b}var i=b.a.createContext({}),j=function(t){var e=b.a.useContext(i),a=e;return t&&(a="function"==typeof t?t(e):c({},e,{},t)),a},p=function(t){var e=j(t.components);return b.a.createElement(i.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return b.a.createElement(b.a.Fragment,{},e)}},m=Object(n.forwardRef)((function(t,e){var a=t.components,n=t.mdxType,r=t.originalType,l=t.parentName,i=O(t,["components","mdxType","originalType","parentName"]),p=j(a),m=n,o=p["".concat(l,".").concat(m)]||p[m]||d[m]||r;return a?b.a.createElement(o,c({ref:e},i,{components:a})):b.a.createElement(o,c({ref:e},i))}));function o(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var r=a.length,l=new Array(r);l[0]=m;var c={};for(var O in e)hasOwnProperty.call(e,O)&&(c[O]=e[O]);c.originalType=t,c.mdxType="string"==typeof t?t:n,l[1]=c;for(var i=2;i<r;i++)l[i]=a[i];return b.a.createElement.apply(null,l)}return b.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);