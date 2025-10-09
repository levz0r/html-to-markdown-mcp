# DocuSeal API Documentation

**Source:** https://www.docuseal.com/docs/api
**Saved:** 2025-10-09T11:33:30.997Z

---

API Reference | DocuSeal Docs                             

[

DocuSeal

](/)

Solutions

Solutions

[

Document Signing API

Build automations and workflows



](/signing-api)[

Embedded Signing

Seamlessly integrate signing experience



](/embedding)[

React Document Signing

Embed document signing in React App



](/react-document-signing)[

Enterprise

Explore our enterprise solutions



](/enterprise)[

On-premises

Self-hosted DocuSeal on your servers



](/on-premises)[

Accept Payments

Collect payments during signing



](/blog/accept-payments-and-request-signatures-with-ease)[

Document Signing for SaaS

Add document signing to your product



](/document-signing-for-saas)[

All Solutions

Explore other solutions



](/solutions)

Industries

[

Software and Technology

](/solutions/tech)[

Healthcare

](/solutions/healthcare)[

Real Estate

](/solutions/realestate)[

Education Institution

](/solutions/education)[

Financial Services

](/solutions/fintech)

Resources

Resources

[

Compliance

Learn about how we follow eSign standards



](/compliance)[

API Reference

Explore our API endpoints and webhooks



](/docs/api)[

Blog

Stay updated with our latest articles



](/blog)[

Documentation

Find answers and learn about the features



](/docs)[

Developer Guides

Development guides and examples



](/guides)[

How-To's

User tutorials and resources



](/resources)[

GDPR

Explore our GDPR-compliant EU Cloud



](/gdpr)[

Qualified Electronic Signature

Sign with the highest level of trust



](/qualified-electronic-signature)

[Pricing](/pricing)

[For Developers](/developers)

[Sign in](https://docuseal.com/sign_in) [Get Started](https://docuseal.com/sign_up) 

DocuSeal

-   Solutions
    
    -   [
        
        Document Signing API
        
        Build automations and workflows
        
        
        
        ](/signing-api)
    -   [
        
        Embedded Signing
        
        Seamlessly integrate document signing
        
        
        
        ](/embedding)
    -   [
        
        Enterprise
        
        Explore our enterprise solutions
        
        
        
        ](/enterprise)
    -   [
        
        On-premises
        
        Self-hosted DocuSeal on your servers
        
        
        
        ](/on-premises)
    -   [
        
        React Document Signing
        
        Embed document signing in React App
        
        
        
        ](/react-document-signing)
    -   [
        
        Document Signing for SaaS
        
        Add document signing to your product
        
        
        
        ](/document-signing-for-saas)
    -   [
        
        Accept Payments
        
        Collect payments during signing
        
        
        
        ](/blog/accept-payments-and-request-signatures-with-ease)
    -   [
        
        All Solutions
        
        Explore other solutions
        
        
        
        ](/solutions)
    
-   Resources
    
    -   [
        
        Compliance
        
        Learn about how we follow eSign standards
        
        
        
        ](/compliance)
    -   [
        
        Blog
        
        Stay updated with our latest articles
        
        
        
        ](/blog)
    -   [
        
        API Reference
        
        Explore our API endpoints and webhooks
        
        
        
        ](/docs/api)
    -   [
        
        Documentation
        
        Find answers and learn about the features
        
        
        
        ](/docs)
    -   [
        
        Developer Guides
        
        Development guides and examples
        
        
        
        ](/guides)
    -   [
        
        How-To's
        
        User tutorials and resources
        
        
        
        ](/resources)
    -   [
        
        GDPR
        
        Explore our GDPR-compliant EU Cloud
        
        
        
        ](/gdpr)
    -   [
        
        Qualified Electronic Signature
        
        Sign with the highest level of trust
        
        
        
        ](/qualified-electronic-signature)
    
-   [Pricing](/pricing)
-   [For Developers](/developers)
-   [Contact](/contact)

[Get Started](https://docuseal.com/sign_up) [Sign in](https://docuseal.com/sign_in)

Ask AI

api.docuseal.com - US api.docuseal.eu - EU On-premises-   API Reference

-   [Submissions](#submissions_resource)
    -   [List all submissions](#list-all-submissions)
    -   [Get a submission](#get-a-submission)
    -   [Get submission documents](#get-submission-documents)
    -   [Create a submission](#create-a-submission)
    -   [Create a submission from PDF](#create-a-submission-from-pdf)
    -   [Create a submission from DOCX](#create-a-submission-from-docx)
    -   [Create a submission from HTML](#create-a-submission-from-html)
    -   [Archive a submission](#archive-a-submission)
-   [Submitters](#submitters_resource)
    -   [List all submitters](#list-all-submitters)
    -   [Get a submitter](#get-a-submitter)
    -   [Update a submitter](#update-a-submitter)
-   [Templates](#templates_resource)
    -   [List all templates](#list-all-templates)
    -   [Get a template](#get-a-template)
    -   [Create a template from PDF](#create-a-template-from-pdf)
    -   [Create a template from Word DOCX](#create-a-template-from-word-docx)
    -   [Create a template from HTML](#create-a-template-from-html)
    -   [Clone a template](#clone-a-template)
    -   [Merge templates](#merge-templates)
    -   [Update a template](#update-a-template)
    -   [Update template documents](#update-template-documents)
    -   [Archive a template](#archive-a-template)

-   Webhooks

-   -   [Form Webhook](#form-webhook)
    -   [Submission Webhook](#submission-webhook)
    -   [Template Webhook](#template-webhook)

-   Embedding

-   -   [Signing Form](/docs/embedded/form)
    -   [Form Builder](/docs/embedded/builder)

Menu

-   [Docs](/docs)
-   # API Reference
    

[

Send signature request

Learn More →

](#create-a-submission)[

Upload PDFs to sign

Learn More →

](#create-a-submission-from-pdf)[

Download signed PDFs

Learn More →

](#webhooks_title)[

HTML to signing form

Learn More →

](#create-a-submission-from-html)[

Learn from Guides →

](/guides)

Explore our API

You can also discover our API with Postman and OpenAPI.

[Get API key](https://docuseal.com/sign_up?redir=https%3A%2F%2Fconsole.docuseal.com%2Fapi) [Run in Postman](https://www.postman.com/docuseal/docuseal/collection/baauu23/docuseal-api) [OpenAPI Specs](https://editor.swagger.io/?url=https%3A%2F%2Fconsole.docuseal.com%2Fopenapi.yml)

Choose your language

 

Github  Copy Copied

```
curl https://api.docuseal.com/templates -H 'X-Auth-Token: API_KEY'
```

## Submissions

Signature requests can be initiated with Submissions API. Submissions can contain one submitter if signed by a single party or multiple submitters if the document template form contains signatures and fields to be collected and filled by multiple parties. Initiate new submissions to request signatures for specified submitters via email or phone number.

get

/submissions

get

/submissions/{id}

get

/submissions/{id}/documents

post

/submissions

post

/submissions/pdf

post

/submissions/docx

post

/submissions/html

delete

/submissions/{id}

### List all submissions

get

/submissions

The API endpoint provides the ability to retrieve a list of available submissions.

Parameters

template\_id Integer 

The template ID allows you to receive only the submissions created from that specific template.

status String 

Filter submissions by status.

Possible values: pending, completed, declined, expired

q String 

Filter submissions based on submitters name, email or phone partial match.

slug String 

Filter submissions by unique slug.

Example: NtLDQM7eJX2ZMd

template\_folder String 

Filter submissions by template folder name.

archived Boolean 

Returns only archived submissions when \`true\` and only active submissions when \`false\`.

limit Integer 

The number of submissions to return. Default value is 10. Maximum value is 100.

after Integer 

The unique identifier of the submission to start the list from. It allows you to receive only submissions with an ID greater than the specified value. Pass ID value from the \`pagination.next\` response to load the next batch of submissions.

before Integer 

The unique identifier of the submission that marks the end of the list. It allows you to receive only submissions with an ID less than the specified value.

Node.js JavaScript TypeScript Python Ruby PHP PHP (cURL) Go C# Java cURL  Copy Copied

```
const fetch = require("node-fetch");

const resp = await fetch("https://api.docuseal.com/submissions", {
  method: "GET",
  headers: {
    "X-Auth-Token": "API_KEY"
  }
});

const { data, pagination } = await resp.json();
```

Example Response  Copy Copied

```
{
  "data": [
    {
      "id": 1,
      "name": null,
      "source": "link",
      "submitters_order": "random",
      "slug": "VyL4szTwYoSvXq",
      "status": "completed",
      "audit_log_url": "https://docuseal.com/file/hash/example.pdf",
      "combined_document_url": null,
      "expire_at": null,
      "completed_at": "2023-12-10T15:49:21.895Z",
      "created_at": "2023-12-10T15:48:17.166Z",
      "updated_at": "2023-12-10T15:49:21.895Z",
      "archived_at": null,
      "submitters": [
        {
          "id": 1,
          "submission_id": 1,
          "uuid": "0954d146-db8c-4772-aafe-2effc7c0e0c0",
          "email": "submitter@example.com",
          "slug": "dsEeWrhRD8yDXT",
          "sent_at": "2023-12-14T15:45:49.011Z",
          "opened_at": "2023-12-14T15:48:23.011Z",
          "completed_at": "2023-12-14T15:49:21.701Z",
          "declined_at": null,
          "created_at": "2023-12-10T15:48:17.173Z",
          "updated_at": "2023-12-14T15:50:21.799Z",
          "name": "John Doe",
          "phone": "+1234567890",
          "status": "completed",
          "role": "First Party",
          "metadata": {},
          "preferences": {}
        }
      ],
      "template": {
        "id": 1,
        "name": "Example Template",
        "external_id": "Temp123",
        "folder_name": "Default",
        "created_at": "2023-12-14T15:50:21.799Z",
        "updated_at": "2023-12-14T15:50:21.799Z"
      },
      "created_by_user": {
        "id": 1,
        "first_name": "Bob",
        "last_name": "Smith",
        "email": "bob.smith@example.com"
      }
    }
  ],
  "pagination": {
    "count": 1,
    "next": 1,
    "prev": 1
  }
}
```

### Get a submission

get

/submissions/{id}

The API endpoint provides the functionality to retrieve information about a submission.

Parameters

id Integer required 

The unique identifier of the submission.

Example: 1001

Node.js JavaScript TypeScript Python Ruby PHP PHP (cURL) Go C# Java cURL  Copy Copied

```
const fetch = require("node-fetch");

const resp = await fetch("https://api.docuseal.com/submissions/1001", {
  method: "GET",
  headers: {
    "X-Auth-Token": "API_KEY"
  }
});

const submission = await resp.json();
```

Example Response  Copy Copied

```
{
  "id": 1,
  "name": null,
  "source": "link",
  "submitters_order": "random",
  "slug": "VyL4szTwYoSvXq",
  "audit_log_url": "https://docuseal.com/blobs/proxy/hash/example.pdf",
  "combined_document_url": null,
  "completed_at": "2023-12-14T15:49:21.701Z",
  "expire_at": null,
  "created_at": "2023-12-10T15:48:17.166Z",
  "updated_at": "2023-12-10T15:49:21.895Z",
  "archived_at": null,
  "submitters": [
    {
      "id": 1,
      "submission_id": 1,
      "uuid": "0954d146-db8c-4772-aafe-2effc7c0e0c0",
      "email": "submitter@example.com",
      "slug": "dsEeWrhRD8yDXT",
      "sent_at": "2023-12-14T15:45:49.011Z",
      "opened_at": "2023-12-14T15:48:23.011Z",
      "completed_at": "2023-12-14T15:49:21.701Z",
      "declined_at": null,
      "created_at": "2023-12-14T15:48:17.173Z",
      "updated_at": "2023-12-14T15:50:21.799Z",
      "name": "John Doe",
      "phone": "+1234567890",
      "external_id": null,
      "status": "completed",
      "metadata": {},
      "values": [
        {
          "field": "Full Name",
          "value": "John Doe"
        }
      ],
      "documents": [
        {
          "name": "example",
          "url": "https://docuseal.com/blobs/proxy/hash/example.pdf"
        }
      ],
      "role": "First Party"
    }
  ],
  "template": {
    "id": 1,
    "name": "Example Template",
    "external_id": "Temp123",
    "folder_name": "Default",
    "created_at": "2023-12-14T15:50:21.799Z",
    "updated_at": "2023-12-14T15:50:21.799Z"
  },
  "created_by_user": {
    "id": 1,
    "first_name": "Bob",
    "last_name": "Smith",
    "email": "bob.smith@example.com"
  },
  "submission_events": [
    {
      "id": 1,
      "submitter_id": 2,
      "event_type": "view_form",
      "event_timestamp": "2023-12-14T15:47:24.566Z"
    }
  ],
  "documents": [
    {
      "name": "example",
      "url": "https://docuseal.com/file/hash/example.pdf"
    }
  ],
  "status": "completed"
}
```

### Get submission documents

get

/submissions/{id}/documents

This endpoint returns a list of partially filled documents for a submission. If the submission has been completed, the final signed documents are returned.

Parameters

id Integer required 

The unique identifier of the submission.

Example: 1001

Node.js JavaScript TypeScript Python Ruby PHP PHP (cURL) Go C# Java cURL  Copy Copied

```
const fetch = require("node-fetch");

const resp = await fetch("https://api.docuseal.com/submissions/1001/documents", {
  method: "GET",
  headers: {
    "X-Auth-Token": "API_KEY"
  }
});

const submission = await resp.json();
```

Example Response  Copy Copied

```
{
  "id": 1,
  "documents": [
    {
      "name": "example",
      "url": "https://docuseal.com/file/hash/example.pdf"
    }
  ]
}
```

### Create a submission

post

/submissions

This API endpoint allows you to create signature requests (submissions) for a document template and send them to the specified submitters (signers).  
**Related Guides**  
[Send documents for signature via API](https://www.docuseal.com/guides/send-documents-for-signature-via-api)  
[Pre-fill PDF document form fields with API](https://www.docuseal.com/guides/pre-fill-pdf-document-form-fields-with-api)

Request Body Properties

template\_id Integer required 

The unique identifier of the template. Document template forms can be created via the Web UI, [PDF and DOCX API](https://www.docuseal.com/guides/use-embedded-text-field-tags-in-the-pdf-to-create-a-fillable-form), or [HTML API](https://www.docuseal.com/guides/create-pdf-document-fillable-form-with-html-api).

Example: 1000001

send\_email Boolean 

Set \`false\` to disable signature request emails sending.

Default: true

send\_sms Boolean 

Set \`true\` to send signature request via phone number and SMS.

Default: false

order String 

Pass 'random' to send signature request emails to all parties right away. The order is 'preserved' by default so the second party will receive a signature request email only after the document is signed by the first party.

Default: preserved

Possible values: preserved, random

completed\_redirect\_url String 

Specify URL to redirect to after the submission completion.

bcc\_completed String 

Specify BCC address to send signed documents to after the completion.

reply\_to String 

Specify Reply-To address to use in the notification emails.

expire\_at String 

Specify the expiration date and time after which the submission becomes unavailable for signature.

Example: 2024-09-01 12:00:00 UTC

message Object 

subject String 

Custom signature request email subject.

body String 

Custom signature request email body. Can include the following variables: {{template.name}}, {{submitter.link}}, {{account.name}}.

submitters Array required 

The list of submitters for the submission.

Child parameters

name String 

The name of the submitter.

role String 

The role name or title of the submitter.

Example: First Party

email String required 

The email address of the submitter.

Example: john.doe@example.com

phone String 

The phone number of the submitter, formatted according to the E.164 standard.

Example: +1234567890

values Object 

An object with pre-filled values for the submission. Use field names for keys of the object. For more configurations see \`fields\` param.

external\_id String 

Your application-specific unique string key to identify this submitter within your app.

completed Boolean 

Pass \`true\` to mark submitter as completed and auto-signed via API.

metadata Object 

Metadata object with additional submitter information.

Example: { "customField": "value" }

send\_email Boolean 

Set \`false\` to disable signature request emails sending only for this submitter.

Default: true

send\_sms Boolean 

Set \`true\` to send signature request via phone number and SMS.

Default: false

reply\_to String 

Specify Reply-To address to use in the notification emails for this submitter.

completed\_redirect\_url String 

Submitter specific URL to redirect to after the submission completion.

order Integer 

The order of the submitter in the workflow (e.g., 0 for the first signer, 1 for the second, etc.). Use the same order number to create order groups. By default, submitters are ordered as in the submitters array.

require\_phone\_2fa Boolean 

Set to \`true\` to require phone 2FA verification via a one-time code sent to the phone number in order to access the documents.

Default: false

message Object 

subject String 

Custom signature request email subject for the submitter.

body String 

Custom signature request email body for the submitter. Can include the following variables: {{template.name}}, {{submitter.link}}, {{account.name}}.

fields Array 

A list of configurations for template document form fields.

Child parameters

name String required 

Document template field name.

Example: First Name

default\_value String | Number | Boolean | Array 

Default value of the field. Use base64 encoded file or a public URL to the image file to set default signature or image fields.

Example: Acme

readonly Boolean 

Set \`true\` to make it impossible for the submitter to edit predefined field value.

Default: false

required Boolean 

Set \`true\` to make the field required.

title String 

Field title displayed to the user instead of the name, shown on the signing form. Supports Markdown.

description String 

Field description displayed on the signing form. Supports Markdown.

validation Object 

pattern String 

HTML field validation pattern string based on [https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/pattern](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/pattern) specification.

Example: \[A-Z\]{4}

message String 

A custom error message to display on validation failure.

min Number | String 

Minimum allowed number value or date depending on field type.

max Number | String 

Maximum allowed number value or date depending on field type.

step Number 

Increment step for number field. Pass 1 to accept only integers, or 0.01 to accept decimal currency.

preferences Object 

font\_size Integer 

Font size of the field value in pixels.

Example: 12

font\_type String 

Font type of the field value.

Possible values: bold, italic, bold\_italic

font String 

Font family of the field value.

Possible values: Times, Helvetica, Courier

color String 

Font color of the field value.

Default: black

Possible values: black, white, blue

align String 

Horizontal alignment of the field text value.

Default: left

Possible values: left, center, right

valign String 

Vertical alignment of the field text value.

Default: center

Possible values: top, center, bottom

format String 

The data format for different field types.  
\- Date field: accepts formats such as DD/MM/YYYY (default: MM/DD/YYYY).  
\- Signature field: accepts drawn, typed, drawn\_or\_typed (default), or upload.  
\- Number field: accepts currency formats such as usd, eur, gbp.

Example: DD/MM/YYYY

price Number 

Price value of the payment field. Only for payment fields.

Example: 99.99

currency String 

Currency value of the payment field. Only for payment fields.

Default: USD

Possible values: USD, EUR, GBP, CAD, AUD

mask Integer | Boolean 

Set \`true\` to make sensitive data masked on the document.

Default: false

Show All

roles Array 

A list of roles for the submitter. Use this param to merge multiple roles into one submitter.

Node.js JSON JavaScript TypeScript Python Ruby PHP PHP (cURL) Go C# Java cURL  Copy Copied

```
const fetch = require("node-fetch");

const resp = await fetch("https://api.docuseal.com/submissions", {
  method: "POST",
  headers: {
    "X-Auth-Token": "API_KEY"
  },
  body: JSON.stringify({
    template_id: 1000001,
    send_email: true,
    submitters: [
      {
        role: "First Party",
        email: "john.doe@example.com"
      }
    ]
  })
});

const submitters = await resp.json();
```

Example Response  Copy Copied

```
[
  {
  "id": 1,
  "submission_id": 1,
  "uuid": "884d545b-3396-49f1-8c07-05b8b2a78755",
  "email": "john.doe@example.com",
  "slug": "pAMimKcyrLjqVt",
  "sent_at": "2023-12-13T23:04:04.252Z",
  "opened_at": null,
  "completed_at": null,
  "declined_at": null,
  "created_at": "2023-12-14T15:50:21.799Z",
  "updated_at": "2023-12-14T15:50:21.799Z",
  "name": "string",
  "phone": "+1234567890",
  "external_id": "2321",
  "metadata": {
    "customData": "custom value"
  },
  "status": "sent",
  "values": [
    {
      "field": "Full Name",
      "value": "John Doe"
    }
  ],
  "preferences": {
    "send_email": true,
    "send_sms": false
  },
  "role": "First Party",
  "embed_src": "https://docuseal.com/s/pAMimKcyrLjqVt"
}
]
```

### Create a submission from PDF

[Pro](/pricing)

post

/submissions/pdf

The API endpoint provides the functionality to create one-off submission request from a PDF. Use `{{Field Name;role=Signer1;type=date}}` text tags to define fillable fields in the document. See [https://www.docuseal.com/examples/fieldtags.pdf](https://www.docuseal.com/examples/fieldtags.pdf) for more text tag formats. Or specify the exact pixel coordinates of the document fields using \`fields\` param.  
**Related Guides**  
[Use embedded text field tags to create a fillable form](https://www.docuseal.com/guides/use-embedded-text-field-tags-in-the-pdf-to-create-a-fillable-form)

Request Body Properties

name String 

Name of the document submission.

Example: Test Submission Document

send\_email Boolean 

Set \`false\` to disable signature request emails sending.

Default: true

send\_sms Boolean 

Set \`true\` to send signature request via phone number and SMS.

Default: false

order String 

Pass 'random' to send signature request emails to all parties right away. The order is 'preserved' by default so the second party will receive a signature request email only after the document is signed by the first party.

Default: preserved

Possible values: preserved, random

completed\_redirect\_url String 

Specify URL to redirect to after the submission completion.

bcc\_completed String 

Specify BCC address to send signed documents to after the completion.

reply\_to String 

Specify Reply-To address to use in the notification emails.

expire\_at String 

Specify the expiration date and time after which the submission becomes unavailable for signature.

Example: 2024-09-01 12:00:00 UTC

template\_ids Array 

An optional array of template IDs to use in the submission along with the provided documents. This can be used to create multi-document submissions when some of the required documents exist within templates.

documents Array required 

Child parameters

name String required 

Name of the document.

file String required 

Base64-encoded content of the PDF file or downloadable file URL.

Example: base64

fields Array 

Fields are optional if you use {{...}} text tags to define fields in the document.

Child parameters

name String 

Name of the field.

type String 

Type of the field (e.g., text, signature, date, initials).

Possible values: heading, text, signature, initials, date, number, image, checkbox, multiple, file, radio, select, cells, stamp, payment, phone, verification, strikethrough

role String 

Role name of the signer.

required Boolean 

Indicates if the field is required.

title String 

Field title displayed to the user instead of the name, shown on the signing form. Supports Markdown.

description String 

Field description displayed on the signing form. Supports Markdown.

areas Array 

Child parameters

x Number required 

X-coordinate of the field area.

y Number required 

Y-coordinate of the field area.

w Number required 

Width of the field area.

h Number required 

Height of the field area.

page Integer required 

Page number of the field area. Starts from 1.

Example: 1

option String 

Option string value for 'radio' and 'multiple' select field types.

options Array 

An array of option values for 'select' field type.

Example: \["Option A","Option B"\]

Show All

position Integer 

Document position in the submission. If not specified, the document will be added in the order it appears in the documents array.

submitters Array required 

The list of submitters for the submission.

Child parameters

name String 

The name of the submitter.

role String 

The role name or title of the submitter.

Example: First Party

email String required 

The email address of the submitter.

Example: john.doe@example.com

phone String 

The phone number of the submitter, formatted according to the E.164 standard.

Example: +1234567890

values Object 

An object with pre-filled values for the submission. Use field names for keys of the object. For more configurations see \`fields\` param.

external\_id String 

Your application-specific unique string key to identify this submitter within your app.

completed Boolean 

Pass \`true\` to mark submitter as completed and auto-signed via API.

metadata Object 

Metadata object with additional submitter information.

Example: { "customField": "value" }

send\_email Boolean 

Set \`false\` to disable signature request emails sending only for this submitter.

Default: true

send\_sms Boolean 

Set \`true\` to send signature request via phone number and SMS.

Default: false

reply\_to String 

Specify Reply-To address to use in the notification emails for this submitter.

completed\_redirect\_url String 

Submitter specific URL to redirect to after the submission completion.

order Integer 

The order of the submitter in the workflow (e.g., 0 for the first signer, 1 for the second, etc.). Use the same order number to create order groups. By default, submitters are ordered as in the submitters array.

require\_phone\_2fa Boolean 

Set to \`true\` to require phone 2FA verification via a one-time code sent to the phone number in order to access the documents.

Default: false

fields Array 

A list of configurations for document form fields.

Child parameters

name String required 

Document field name.

Example: First Name

default\_value String | Number | Boolean | Array 

Default value of the field. Use base64 encoded file or a public URL to the image file to set default signature or image fields.

Example: Acme

readonly Boolean 

Set \`true\` to make it impossible for the submitter to edit predefined field value.

Default: false

required Boolean 

Set \`true\` to make the field required.

title String 

Field title displayed to the user instead of the name, shown on the signing form. Supports Markdown.

description String 

Field description displayed on the signing form. Supports Markdown.

validation Object 

pattern String 

HTML field validation pattern string based on [https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/pattern](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/pattern) specification.

Example: \[A-Z\]{4}

message String 

A custom error message to display on validation failure.

min Number | String 

Minimum allowed number value or date depending on field type.

max Number | String 

Maximum allowed number value or date depending on field type.

step Number 

Increment step for number field. Pass 1 to accept only integers, or 0.01 to accept decimal currency.

preferences Object 

font\_size Integer 

Font size of the field value in pixels.

Example: 12

font\_type String 

Font type of the field value.

Possible values: bold, italic, bold\_italic

font String 

Font family of the field value.

Possible values: Times, Helvetica, Courier

color String 

Font color of the field value.

Default: black

Possible values: black, white, blue

align String 

Horizontal alignment of the field text value.

Default: left

Possible values: left, center, right

valign String 

Vertical alignment of the field text value.

Default: center

Possible values: top, center, bottom

format String 

The data format for different field types.  
\- Date field: accepts formats such as DD/MM/YYYY (default: MM/DD/YYYY).  
\- Signature field: accepts drawn, typed, drawn\_or\_typed (default), or upload.  
\- Number field: accepts currency formats such as usd, eur, gbp.

Example: DD/MM/YYYY

price Number 

Price value of the payment field. Only for payment fields.

Example: 99.99

currency String 

Currency value of the payment field. Only for payment fields.

Default: USD

Possible values: USD, EUR, GBP, CAD, AUD

mask Integer | Boolean 

Set \`true\` to make sensitive data masked on the document.

Default: false

Show All

roles Array 

A list of roles for the submitter. Use this param to merge multiple roles into one submitter.

message Object 

subject String 

Custom signature request email subject.

body String 

Custom signature request email body. Can include the following variables: {{submission.name}}, {{submitter.link}}, {{account.name}}.

flatten Boolean 

Remove PDF form fields from the documents.

Default: false

merge\_documents Boolean 

Set \`true\` to merge the documents into a single PDF file.

Default: false

remove\_tags Boolean 

Pass \`false\` to disable the removal of {{text}} tags from the PDF. This can be used along with transparent text tags for faster and more robust PDF processing.

Default: true

Node.js JSON JavaScript TypeScript Python Ruby PHP PHP (cURL) Go C# Java cURL  Copy Copied

```
const fetch = require("node-fetch");

const resp = await fetch("https://api.docuseal.com/submissions/pdf", {
  method: "POST",
  headers: {
    "X-Auth-Token": "API_KEY"
  },
  body: JSON.stringify({
    name: "Test Submission Document",
    documents: [
      {
        name: "string",
        file: "base64",
        fields: [
          {
            name: "string",
            areas: [
              {
                x: 0,
                y: 0,
                w: 0,
                h: 0,
                page: 1
              }
            ]
          }
        ]
      }
    ],
    submitters: [
      {
        role: "First Party",
        email: "john.doe@example.com"
      }
    ]
  })
});

const submission = await resp.json();
```

Example Response  Copy Copied

```
{
  "id": 5,
  "name": "Test Submission",
  "submitters": [
    {
      "id": 1,
      "uuid": "884d545b-3396-49f1-8c07-05b8b2a78755",
      "email": "john.doe@example.com",
      "slug": "pAMimKcyrLjqVt",
      "sent_at": "2025-06-02T15:55:51.310Z",
      "opened_at": null,
      "completed_at": null,
      "declined_at": null,
      "created_at": "2025-06-02T15:55:50.320Z",
      "updated_at": "2025-06-02T15:55:50.320Z",
      "name": "string",
      "phone": "+1234567890",
      "external_id": "2321",
      "metadata": {
        "customData": "custom value"
      },
      "status": "sent",
      "values": [
        {
          "field": "Full Name",
          "value": "John Doe"
        }
      ],
      "preferences": {
        "send_email": true,
        "send_sms": false,
        "reply_to": "reply@example.com",
        "completed_redirect_url": "https://example.com/"
      },
      "role": "First Party",
      "embed_src": "https://docuseal.com/s/pAMimKcyrLjqVt"
    }
  ],
  "source": "api",
  "submitters_order": "preserved",
  "status": "pending",
  "schema": [
    {
      "name": "Demo PDF",
      "attachment_uuid": "48d2998f-266b-47e4-beb2-250ab7ccebdf"
    }
  ],
  "fields": [
    {
      "name": "Name",
      "type": "text",
      "required": true,
      "uuid": "d0bf3c0c-1928-40c8-80f9-d9f3c6ad4eff",
      "submitter_uuid": "0b0bff58-bc9a-475d-b4a9-2f3e5323faf7",
      "areas": [
        {
          "page": 1,
          "attachment_uuid": "48d2998f-266b-47e4-beb2-250ab7ccebdf",
          "x": 0.403158189124654,
          "y": 0.04211750189825361,
          "w": 0.100684625476058,
          "h": 0.01423690205011389
        }
      ]
    }
  ],
  "expire_at": null,
  "created_at": "2025-06-02T15:55:50.270Z"
}
```

### Create a submission from DOCX

[Pro](/pricing)

post

/submissions/docx

The API endpoint provides functionality to create a one-off submission request from a DOCX file with dynamic content variables. Use `[[variable_name]]` text tags to define dynamic content variables in the document. See [https://www.docuseal.com/examples/demo\_template.docx](https://www.docuseal.com/examples/demo_template.docx) for the specific text variable syntax, including dynamic content tables and list. You can also use the `{{signature}}` field syntax to define fillable fields, as in a PDF.  
**Related Guides**  
[Use dynamic content variables in DOCX to create personalized documents](https://www.docuseal.com/guides/use-dynamic-content-variables-in-docx-to-create-personalized-documents)

Request Body Properties

name String 

Name of the document submission.

Example: Test Submission Document

send\_email Boolean 

Set \`false\` to disable signature request emails sending.

Default: true

send\_sms Boolean 

Set \`true\` to send signature request via phone number and SMS.

Default: false

variables Object 

Dynamic content variables object. Variable values can be strings, numbers, arrays, objects, or HTML content used to generate styled text, paragraphs, and tables in DOCX.

Example: {"variable\_name":"value"}

order String 

Pass 'random' to send signature request emails to all parties right away. The order is 'preserved' by default so the second party will receive a signature request email only after the document is signed by the first party.

Default: preserved

Possible values: preserved, random

completed\_redirect\_url String 

Specify URL to redirect to after the submission completion.

bcc\_completed String 

Specify BCC address to send signed documents to after the completion.

reply\_to String 

Specify Reply-To address to use in the notification emails.

expire\_at String 

Specify the expiration date and time after which the submission becomes unavailable for signature.

Example: 2024-09-01 12:00:00 UTC

template\_ids Array 

An optional array of template IDs to use in the submission along with the provided documents. This can be used to create multi-document submissions when some of the required documents exist within templates.

documents Array required 

Child parameters

name String required 

Name of the document.

file String required 

Base64-encoded content of the PDF or DOCX file or downloadable file URL.

Example: base64

position Integer 

Document position in the submission. If not specified, the document will be added in the order it appears in the documents array.

submitters Array required 

The list of submitters for the submission.

Child parameters

name String 

The name of the submitter.

role String 

The role name or title of the submitter.

Example: First Party

email String required 

The email address of the submitter.

Example: john.doe@example.com

phone String 

The phone number of the submitter, formatted according to the E.164 standard.

Example: +1234567890

values Object 

An object with pre-filled values for the submission. Use field names for keys of the object. For more configurations see \`fields\` param.

external\_id String 

Your application-specific unique string key to identify this submitter within your app.

completed Boolean 

Pass \`true\` to mark submitter as completed and auto-signed via API.

metadata Object 

Metadata object with additional submitter information.

Example: { "customField": "value" }

send\_email Boolean 

Set \`false\` to disable signature request emails sending only for this submitter.

Default: true

send\_sms Boolean 

Set \`true\` to send signature request via phone number and SMS.

Default: false

reply\_to String 

Specify Reply-To address to use in the notification emails for this submitter.

completed\_redirect\_url String 

Submitter specific URL to redirect to after the submission completion.

order Integer 

The order of the submitter in the workflow (e.g., 0 for the first signer, 1 for the second, etc.). Use the same order number to create order groups. By default, submitters are ordered as in the submitters array.

require\_phone\_2fa Boolean 

Set to \`true\` to require phone 2FA verification via a one-time code sent to the phone number in order to access the documents.

Default: false

fields Array 

A list of configurations for document form fields.

Child parameters

name String required 

Document field name.

Example: First Name

default\_value String | Number | Boolean | Array 

Default value of the field. Use base64 encoded file or a public URL to the image file to set default signature or image fields.

Example: Acme

readonly Boolean 

Set \`true\` to make it impossible for the submitter to edit predefined field value.

Default: false

required Boolean 

Set \`true\` to make the field required.

title String 

Field title displayed to the user instead of the name, shown on the signing form. Supports Markdown.

description String 

Field description displayed on the signing form. Supports Markdown.

validation Object 

pattern String 

HTML field validation pattern string based on [https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/pattern](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/pattern) specification.

Example: \[A-Z\]{4}

message String 

A custom error message to display on validation failure.

min Number | String 

Minimum allowed number value or date depending on field type.

max Number | String 

Maximum allowed number value or date depending on field type.

step Number 

Increment step for number field. Pass 1 to accept only integers, or 0.01 to accept decimal currency.

preferences Object 

font\_size Integer 

Font size of the field value in pixels.

Example: 12

font\_type String 

Font type of the field value.

Possible values: bold, italic, bold\_italic

font String 

Font family of the field value.

Possible values: Times, Helvetica, Courier

color String 

Font color of the field value.

Default: black

Possible values: black, white, blue

align String 

Horizontal alignment of the field text value.

Default: left

Possible values: left, center, right

valign String 

Vertical alignment of the field text value.

Default: center

Possible values: top, center, bottom

format String 

The data format for different field types.  
\- Date field: accepts formats such as DD/MM/YYYY (default: MM/DD/YYYY).  
\- Signature field: accepts drawn, typed, drawn\_or\_typed (default), or upload.  
\- Number field: accepts currency formats such as usd, eur, gbp.

Example: DD/MM/YYYY

price Number 

Price value of the payment field. Only for payment fields.

Example: 99.99

currency String 

Currency value of the payment field. Only for payment fields.

Default: USD

Possible values: USD, EUR, GBP, CAD, AUD

mask Integer | Boolean 

Set \`true\` to make sensitive data masked on the document.

Default: false

Show All

roles Array 

A list of roles for the submitter. Use this param to merge multiple roles into one submitter.

message Object 

subject String 

Custom signature request email subject.

body String 

Custom signature request email body. Can include the following variables: {{submission.name}}, {{submitter.link}}, {{account.name}}.

merge\_documents Boolean 

Set \`true\` to merge the documents into a single PDF file.

Default: false

remove\_tags Boolean 

Pass \`false\` to disable the removal of {{text}} tags from the PDF. This can be used along with transparent text tags for faster and more robust PDF processing.

Default: true

Node.js JSON JavaScript TypeScript Python Ruby PHP PHP (cURL) Go C# Java cURL  Copy Copied

```
const fetch = require("node-fetch");

const resp = await fetch("https://api.docuseal.com/submissions/docx", {
  method: "POST",
  headers: {
    "X-Auth-Token": "API_KEY"
  },
  body: JSON.stringify({
    name: "Test Submission Document",
    variables: {
      variable_name: "value"
    },
    documents: [
      {
        name: "string",
        file: "base64"
      }
    ],
    submitters: [
      {
        role: "First Party",
        email: "john.doe@example.com"
      }
    ]
  })
});

const submitters = await resp.json();
```

Example Response  Copy Copied

```
{
  "id": 5,
  "name": "Test Submission",
  "submitters": [
    {
      "id": 1,
      "uuid": "884d545b-3396-49f1-8c07-05b8b2a78755",
      "email": "john.doe@example.com",
      "slug": "pAMimKcyrLjqVt",
      "sent_at": "2025-06-02T15:55:51.310Z",
      "opened_at": null,
      "completed_at": null,
      "declined_at": null,
      "created_at": "2025-06-02T15:55:50.320Z",
      "updated_at": "2025-06-02T15:55:50.320Z",
      "name": "string",
      "phone": "+1234567890",
      "external_id": "2321",
      "metadata": {
        "customData": "custom value"
      },
      "status": "sent",
      "values": [
        {
          "field": "Full Name",
          "value": "John Doe"
        }
      ],
      "preferences": {
        "send_email": true,
        "send_sms": false,
        "reply_to": "reply@example.com",
        "completed_redirect_url": "https://example.com/"
      },
      "role": "First Party",
      "embed_src": "https://docuseal.com/s/pAMimKcyrLjqVt"
    }
  ],
  "source": "api",
  "submitters_order": "preserved",
  "status": "pending",
  "schema": [
    {
      "name": "Demo PDF",
      "attachment_uuid": "48d2998f-266b-47e4-beb2-250ab7ccebdf"
    }
  ],
  "fields": [
    {
      "name": "Name",
      "type": "text",
      "required": true,
      "uuid": "d0bf3c0c-1928-40c8-80f9-d9f3c6ad4eff",
      "submitter_uuid": "0b0bff58-bc9a-475d-b4a9-2f3e5323faf7",
      "areas": [
        {
          "page": 1,
          "attachment_uuid": "48d2998f-266b-47e4-beb2-250ab7ccebdf",
          "x": 0.403158189124654,
          "y": 0.04211750189825361,
          "w": 0.100684625476058,
          "h": 0.01423690205011389
        }
      ]
    }
  ],
  "expire_at": null,
  "created_at": "2025-06-02T15:55:50.270Z"
}
```

### Create a submission from HTML

[Pro](/pricing)

post

/submissions/html

This API endpoint allows you to create a one-off submission request document using the provided HTML content, with special field tags rendered as a fillable and signable form.  
**Related Guides**  
[Create PDF document fillable form with HTML](https://www.docuseal.com/guides/create-pdf-document-fillable-form-with-html-api)

Request Body Properties

name String 

Name of the document submission

Example: Test Submission Document

send\_email Boolean 

Set \`false\` to disable signature request emails sending.

Default: true

send\_sms Boolean 

Set \`true\` to send signature request via phone number and SMS.

Default: false

order String 

Pass 'random' to send signature request emails to all parties right away. The order is 'preserved' by default so the second party will receive a signature request email only after the document is signed by the first party.

Default: preserved

Possible values: preserved, random

completed\_redirect\_url String 

Specify URL to redirect to after the submission completion.

bcc\_completed String 

Specify BCC address to send signed documents to after the completion.

reply\_to String 

Specify Reply-To address to use in the notification emails.

expire\_at String 

Specify the expiration date and time after which the submission becomes unavailable for signature.

Example: 2024-09-01 12:00:00 UTC

template\_ids Array 

An optional array of template IDs to use in the submission along with the provided documents. This can be used to create multi-document submissions when some of the required documents exist within templates.

documents Array required 

The list of documents built from HTML. Can be used to create a submission with multiple documents.

Child parameters

name String 

Document name. Random uuid will be assigned when not specified.

Example: Test Document

html String required 

HTML document content with field tags.

Example: <p>Lorem Ipsum is simply dummy text of the <text-field name="Industry" role="First Party" required="false" style="width: 80px; height: 16px; display: inline-block; margin-bottom: -4px"> </text-field> and typesetting industry</p>

html\_header String 

HTML document content of the header to be displayed on every page.

html\_footer String 

HTML document content of the footer to be displayed on every page.

size String 

Page size. Letter 8.5 x 11 will be assigned when not specified.

Default: Letter

Possible values: Letter, Legal, Tabloid, Ledger, A0, A1, A2, A3, A4, A5, A6

Example: A4

position Integer 

Document position in the submission. If not specified, the document will be added in the order it appears in the documents array.

submitters Array required 

The list of submitters for the submission.

Child parameters

name String 

The name of the submitter.

role String 

The role name or title of the submitter.

Example: First Party

email String required 

The email address of the submitter.

Example: john.doe@example.com

phone String 

The phone number of the submitter, formatted according to the E.164 standard.

Example: +1234567890

values Object 

An object with pre-filled values for the submission. Use field names for keys of the object. For more configurations see \`fields\` param.

external\_id String 

Your application-specific unique string key to identify this submitter within your app.

completed Boolean 

Pass \`true\` to mark submitter as completed and auto-signed via API.

metadata Object 

Metadata object with additional submitter information.

Example: { "customField": "value" }

send\_email Boolean 

Set \`false\` to disable signature request emails sending only for this submitter.

Default: true

send\_sms Boolean 

Set \`true\` to send signature request via phone number and SMS.

Default: false

reply\_to String 

Specify Reply-To address to use in the notification emails for this submitter.

completed\_redirect\_url String 

Submitter specific URL to redirect to after the submission completion.

order Integer 

The order of the submitter in the workflow (e.g., 0 for the first signer, 1 for the second, etc.). Use the same order number to create order groups. By default, submitters are ordered as in the submitters array.

require\_phone\_2fa Boolean 

Set to \`true\` to require phone 2FA verification via a one-time code sent to the phone number in order to access the documents.

Default: false

fields Array 

A list of configurations for document form fields.

Child parameters

name String required 

Document field name.

Example: First Name

default\_value String | Number | Boolean | Array 

Default value of the field. Use base64 encoded file or a public URL to the image file to set default signature or image fields.

Example: Acme

readonly Boolean 

Set \`true\` to make it impossible for the submitter to edit predefined field value.

Default: false

required Boolean 

Set \`true\` to make the field required.

title String 

Field title displayed to the user instead of the name, shown on the signing form. Supports Markdown.

description String 

Field description displayed on the signing form. Supports Markdown.

validation Object 

pattern String 

HTML field validation pattern string based on [https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/pattern](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/pattern) specification.

Example: \[A-Z\]{4}

message String 

A custom error message to display on validation failure.

min Number | String 

Minimum allowed number value or date depending on field type.

max Number | String 

Maximum allowed number value or date depending on field type.

step Number 

Increment step for number field. Pass 1 to accept only integers, or 0.01 to accept decimal currency.

preferences Object 

font\_size Integer 

Font size of the field value in pixels.

Example: 12

font\_type String 

Font type of the field value.

Possible values: bold, italic, bold\_italic

font String 

Font family of the field value.

Possible values: Times, Helvetica, Courier

color String 

Font color of the field value.

Default: black

Possible values: black, white, blue

align String 

Horizontal alignment of the field text value.

Default: left

Possible values: left, center, right

valign String 

Vertical alignment of the field text value.

Default: center

Possible values: top, center, bottom

format String 

The data format for different field types.  
\- Date field: accepts formats such as DD/MM/YYYY (default: MM/DD/YYYY).  
\- Signature field: accepts drawn, typed, drawn\_or\_typed (default), or upload.  
\- Number field: accepts currency formats such as usd, eur, gbp.

Example: DD/MM/YYYY

price Number 

Price value of the payment field. Only for payment fields.

Example: 99.99

currency String 

Currency value of the payment field. Only for payment fields.

Default: USD

Possible values: USD, EUR, GBP, CAD, AUD

mask Integer | Boolean 

Set \`true\` to make sensitive data masked on the document.

Default: false

Show All

roles Array 

A list of roles for the submitter. Use this param to merge multiple roles into one submitter.

message Object 

subject String 

Custom signature request email subject.

body String 

Custom signature request email body. Can include the following variables: {{submission.name}}, {{submitter.link}}, {{account.name}}.

merge\_documents Boolean 

Set \`true\` to merge the documents into a single PDF file.

Default: false

Node.js JSON JavaScript TypeScript Python Ruby PHP PHP (cURL) Go C# Java cURL  Copy Copied

```
const fetch = require("node-fetch");

const resp = await fetch("https://api.docuseal.com/submissions/html", {
  method: "POST",
  headers: {
    "X-Auth-Token": "API_KEY"
  },
  body: JSON.stringify({
    name: "Test Submission Document",
    documents: [
      {
        name: "Test Document",
        html: `<p>Lorem Ipsum is simply dummy text of the
<text-field
  name="Industry"
  role="First Party"
  required="false"
  style="width: 80px; height: 16px; display: inline-block; margin-bottom: -4px">
</text-field>
and typesetting industry</p>
`
      }
    ],
    submitters: [
      {
        role: "First Party",
        email: "john.doe@example.com"
      }
    ]
  })
});

const submission = await resp.json();
```

Example Response  Copy Copied

```
{
  "id": 5,
  "name": "Test Submission",
  "submitters": [
    {
      "id": 1,
      "uuid": "884d545b-3396-49f1-8c07-05b8b2a78755",
      "email": "john.doe@example.com",
      "slug": "pAMimKcyrLjqVt",
      "sent_at": "2025-06-02T15:55:51.310Z",
      "opened_at": null,
      "completed_at": null,
      "declined_at": null,
      "created_at": "2025-06-02T15:55:50.320Z",
      "updated_at": "2025-06-02T15:55:50.320Z",
      "name": "string",
      "phone": "+1234567890",
      "external_id": "2321",
      "metadata": {
        "customData": "custom value"
      },
      "status": "sent",
      "values": [
        {
          "field": "Full Name",
          "value": "John Doe"
        }
      ],
      "preferences": {
        "send_email": true,
        "send_sms": false,
        "reply_to": "reply@example.com",
        "completed_redirect_url": "https://example.com/"
      },
      "role": "First Party",
      "embed_src": "https://docuseal.com/s/pAMimKcyrLjqVt"
    }
  ],
  "source": "api",
  "submitters_order": "preserved",
  "status": "pending",
  "schema": [
    {
      "name": "Demo PDF",
      "attachment_uuid": "48d2998f-266b-47e4-beb2-250ab7ccebdf"
    }
  ],
  "fields": [
    {
      "name": "Name",
      "type": "text",
      "required": true,
      "uuid": "d0bf3c0c-1928-40c8-80f9-d9f3c6ad4eff",
      "submitter_uuid": "0b0bff58-bc9a-475d-b4a9-2f3e5323faf7",
      "areas": [
        {
          "page": 1,
          "attachment_uuid": "48d2998f-266b-47e4-beb2-250ab7ccebdf",
          "x": 0.403158189124654,
          "y": 0.04211750189825361,
          "w": 0.100684625476058,
          "h": 0.01423690205011389
        }
      ]
    }
  ],
  "expire_at": null,
  "created_at": "2025-06-02T15:55:50.270Z"
}
```

### Archive a submission

delete

/submissions/{id}

The API endpoint allows you to archive a submission.

Parameters

id Integer required 

The unique identifier of the submission.

Example: 1001

Node.js JavaScript TypeScript Python Ruby PHP PHP (cURL) Go C# Java cURL  Copy Copied

```
const fetch = require("node-fetch");

const resp = await fetch("https://api.docuseal.com/submissions/1001", {
  method: "DELETE",
  headers: {
    "X-Auth-Token": "API_KEY"
  }
});

await resp.json();
```

Example Response  Copy Copied

```
{
  "id": 1,
  "archived_at": "2023-12-14T15:50:21.799Z"
}
```

## Submitters

Submitters API allows you to load all details provided by the signer of the document.

get

/submitters

get

/submitters/{id}

put

/submitters/{id}

### List all submitters

get

/submitters

The API endpoint provides the ability to retrieve a list of submitters.

Parameters

submission\_id Integer 

The submission ID allows you to receive only the submitters related to that specific submission.

q String 

Filter submitters on name, email or phone partial match.

slug String 

Filter submitters by unique slug.

Example: zAyL9fH36Havvm

completed\_after String 

The date and time string value to filter submitters that completed the submission after the specified date and time.

Example: 2024-03-05 9:32:20

completed\_before String 

The date and time string value to filter submitters that completed the submission before the specified date and time.

Example: 2024-03-06 19:32:20

external\_id String 

The unique applications-specific identifier provided for a submitter when initializing a signature request. It allows you to receive only submitters with a specified external id.

limit Integer 

The number of submitters to return. Default value is 10. Maximum value is 100.

after Integer 

The unique identifier of the submitter to start the list from. It allows you to receive only submitters with id greater than the specified value. Pass ID value from the \`pagination.next\` response to load the next batch of submitters.

before Integer 

The unique identifier of the submitter to end the list with. It allows you to receive only submitters with id less than the specified value.

Node.js JavaScript TypeScript Python Ruby PHP PHP (cURL) Go C# Java cURL  Copy Copied

```
const fetch = require("node-fetch");

const resp = await fetch("https://api.docuseal.com/submitters", {
  method: "GET",
  headers: {
    "X-Auth-Token": "API_KEY"
  }
});

const { data, pagination } = await resp.json();
```

Example Response  Copy Copied

```
{
  "data": [
    {
      "id": 7,
      "submission_id": 3,
      "uuid": "0954d146-db8c-4772-aafe-2effc7c0e0c0",
      "email": "submitter@example.com",
      "slug": "dsEeWrhRD8yDXT",
      "sent_at": "2023-12-14T15:45:49.011Z",
      "opened_at": "2023-12-14T15:48:23.011Z",
      "completed_at": "2023-12-14T15:49:21.701Z",
      "declined_at": null,
      "created_at": "2023-12-14T15:48:17.173Z",
      "updated_at": "2023-12-14T15:50:21.799Z",
      "name": "John Doe",
      "phone": "+1234567890",
      "status": "completed",
      "external_id": null,
      "preferences": {},
      "metadata": {},
      "template": {
        "id": 2,
        "name": "Example Template",
        "created_at": "2023-12-14T15:50:21.799Z",
        "updated_at": "2023-12-14T15:50:21.799Z"
      },
      "submission_events": [
        {
          "id": 12,
          "submitter_id": 7,
          "event_type": "view_form",
          "event_timestamp": "2023-12-14T15:48:17.351Z"
        }
      ],
      "values": [
        {
          "field": "Full Name",
          "value": "John Doe"
        }
      ],
      "documents": [
        {
          "name": "sample-document",
          "url": "https://docuseal.com/file/eyJfcmFpbHMiOnsiIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--f9758362acced0f3c86cdffad02800e/sample-document.pdf"
        }
      ],
      "role": "First Party"
    }
  ],
  "pagination": {
    "count": 1,
    "next": 1,
    "prev": 1
  }
}
```

### Get a submitter

get

/submitters/{id}

The API endpoint provides functionality to retrieve information about a submitter, along with the submitter documents and field values.

Parameters

id Integer required 

The unique identifier of the submitter.

Example: 500001

Node.js JavaScript TypeScript Python Ruby PHP PHP (cURL) Go C# Java cURL  Copy Copied

```
const fetch = require("node-fetch");

const resp = await fetch("https://api.docuseal.com/submitters/500001", {
  method: "GET",
  headers: {
    "X-Auth-Token": "API_KEY"
  }
});

const submitter = await resp.json();
```

Example Response  Copy Copied

```
{
  "id": 7,
  "submission_id": 3,
  "uuid": "0954d146-db8c-4772-aafe-2effc7c0e0c0",
  "email": "submitter@example.com",
  "slug": "dsEeWrhRD8yDXT",
  "sent_at": "2023-12-14T15:45:49.011Z",
  "opened_at": "2023-12-14T15:48:23.011Z",
  "completed_at": "2023-12-10T15:49:21.701Z",
  "declined_at": null,
  "created_at": "2023-12-14T15:48:17.173Z",
  "updated_at": "2023-12-14T15:50:21.799Z",
  "name": "John Doe",
  "phone": "+1234567890",
  "status": "completed",
  "external_id": null,
  "metadata": {},
  "preferences": {},
  "template": {
    "id": 2,
    "name": "Example Template",
    "created_at": "2023-12-14T15:50:21.799Z",
    "updated_at": "2023-12-14T15:50:21.799Z"
  },
  "submission_events": [
    {
      "id": 12,
      "submitter_id": 7,
      "event_type": "view_form",
      "event_timestamp": "2023-12-14T15:47:17.351Z"
    }
  ],
  "values": [
    {
      "field": "Full Name",
      "value": "John Doe"
    }
  ],
  "documents": [
    {
      "name": "sample-document",
      "url": "https://docuseal.com/file/hash/sample-document.pdf"
    }
  ],
  "role": "First Party"
}
```

### Update a submitter

put

/submitters/{id}

The API endpoint allows you to update submitter details, pre-fill or update field values and re-send emails.  
**Related Guides**  
[Automatically sign documents via API](https://www.docuseal.com/guides/pre-fill-pdf-document-form-fields-with-api#automatically_sign_documents_via_api)

Parameters

id Integer required 

The unique identifier of the submitter.

Example: 500001

Request Body Properties

name String 

The name of the submitter.

email String 

The email address of the submitter.

Example: john.doe@example.com

phone String 

The phone number of the submitter, formatted according to the E.164 standard.

Example: +1234567890

values Object 

An object with pre-filled values for the submission. Use field names for keys of the object. For more configurations see \`fields\` param.

external\_id String 

Your application-specific unique string key to identify this submitter within your app.

send\_email Boolean 

Set \`true\` to re-send signature request emails.

send\_sms Boolean 

Set \`true\` to re-send signature request via phone number SMS.

Default: false

reply\_to String 

Specify Reply-To address to use in the notification emails.

completed Boolean 

Pass \`true\` to mark submitter as completed and auto-signed via API.

metadata Object 

Metadata object with additional submitter information.

Example: { "customField": "value" }

completed\_redirect\_url String 

Submitter specific URL to redirect to after the submission completion.

require\_phone\_2fa Boolean 

Set to \`true\` to require phone 2FA verification via a one-time code sent to the phone number in order to access the documents.

Default: false

message Object 

subject String 

Custom signature request email subject.

body String 

Custom signature request email body. Can include the following variables: {{template.name}}, {{submitter.link}}, {{account.name}}.

fields Array 

A list of configurations for template document form fields.

Child parameters

name String required 

Document template field name.

Example: First Name

default\_value String | Number | Boolean | Array 

Default value of the field. Use base64 encoded file or a public URL to the image file to set default signature or image fields.

Example: Acme

readonly Boolean 

Set \`true\` to make it impossible for the submitter to edit predefined field value.

Default: false

required Boolean 

Set \`true\` to make the field required.

validation Object 

pattern String 

HTML field validation pattern string based on [https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/pattern](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/pattern) specification.

Example: \[A-Z\]{4}

message String 

A custom error message to display on validation failure.

min Number | String 

Minimum allowed number value or date depending on field type.

max Number | String 

Maximum allowed number value or date depending on field type.

step Number 

Increment step for number field. Pass 1 to accept only integers, or 0.01 to accept decimal currency.

preferences Object 

font\_size Integer 

Font size of the field value in pixels.

Example: 12

font\_type String 

Font type of the field value.

Possible values: bold, italic, bold\_italic

font String 

Font family of the field value.

Possible values: Times, Helvetica, Courier

color String 

Font color of the field value.

Default: black

Possible values: black, white, blue

align String 

Horizontal alignment of the field text value.

Default: left

Possible values: left, center, right

valign String 

Vertical alignment of the field text value.

Default: center

Possible values: top, center, bottom

format String 

The data format for different field types.  
\- Date field: accepts formats such as DD/MM/YYYY (default: MM/DD/YYYY).  
\- Signature field: accepts drawn, typed, drawn\_or\_typed (default), or upload.  
\- Number field: accepts currency formats such as usd, eur, gbp.

Example: DD/MM/YYYY

price Number 

Price value of the payment field. Only for payment fields.

Example: 99.99

currency String 

Currency value of the payment field. Only for payment fields.

Default: USD

Possible values: USD, EUR, GBP, CAD, AUD

mask Integer | Boolean 

Set \`true\` to make sensitive data masked on the document.

Default: false

Show All

Node.js JSON JavaScript TypeScript Python Ruby PHP PHP (cURL) Go C# Java cURL  Copy Copied

```
const fetch = require("node-fetch");

const resp = await fetch("https://api.docuseal.com/submitters/500001", {
  method: "PUT",
  headers: {
    "X-Auth-Token": "API_KEY"
  },
  body: JSON.stringify({
    email: "john.doe@example.com",
    fields: [
      {
        name: "First Name",
        default_value: "Acme"
      }
    ]
  })
});

const submitter = await resp.json();
```

Example Response  Copy Copied

```
{
  "id": 1,
  "submission_id": 12,
  "uuid": "0954d146-db8c-4772-aafe-2effc7c0e0c0",
  "email": "submitter@example.com",
  "slug": "dsEeWrhRD8yDXT",
  "sent_at": "2023-12-14T15:45:49.011Z",
  "opened_at": "2023-12-14T15:48:23.011Z",
  "completed_at": "2023-12-10T15:49:21.701Z",
  "declined_at": null,
  "created_at": "2023-12-14T15:48:17.173Z",
  "updated_at": "2023-12-14T15:50:21.799Z",
  "name": "John Doe",
  "phone": "+1234567890",
  "status": "completed",
  "external_id": null,
  "metadata": {},
  "preferences": {},
  "values": [
    {
      "field": "Full Name",
      "value": "John Doe"
    }
  ],
  "documents": [],
  "role": "First Party",
  "embed_src": "https://docuseal.com/s/pAMimKcyrLjqVt"
}
```

## Templates

Templates represent reusable document signing forms with fields and signatures to be collected. It's possible to create unique template forms with fields and signatures using HTML or with tagged PDFs.

get

/templates

get

/templates/{id}

post

/templates/pdf

post

/templates/docx

post

/templates/html

post

/templates/{id}/clone

post

/templates/merge

put

/templates/{id}

put

/templates/{id}/documents

delete

/templates/{id}

### List all templates

get

/templates

The API endpoint provides the ability to retrieve a list of available document templates.

Parameters

q String 

Filter templates based on the name partial match.

slug String 

Filter templates by unique slug.

Example: opaKWh8WWTAcVG

external\_id String 

The unique applications-specific identifier provided for the template via API or Embedded template form builder. It allows you to receive only templates with your specified external id.

folder String 

Filter templates by folder name.

archived Boolean 

Get only archived templates instead of active ones.

limit Integer 

The number of templates to return. Default value is 10. Maximum value is 100.

after Integer 

The unique identifier of the template to start the list from. It allows you to receive only templates with id greater than the specified value. Pass ID value from the \`pagination.next\` response to load the next batch of templates.

before Integer 

The unique identifier of the template to end the list with. It allows you to receive only templates with id less than the specified value.

Node.js JavaScript TypeScript Python Ruby PHP PHP (cURL) Go C# Java cURL  Copy Copied

```
const fetch = require("node-fetch");

const resp = await fetch("https://api.docuseal.com/templates", {
  method: "GET",
  headers: {
    "X-Auth-Token": "API_KEY"
  }
});

const { data, pagination } = await resp.json();
```

Example Response  Copy Copied

```
{
  "data": [
    {
      "id": 1,
      "slug": "iRgjDX7WDK6BRo",
      "name": "Example Template",
      "preferences": {},
      "schema": [
        {
          "attachment_uuid": "d94e615f-76e3-46d5-8f98-36bdacb8664a",
          "name": "example-document"
        }
      ],
      "fields": [
        {
          "uuid": "594bdf04-d941-4ca6-aa73-93e61d625c02",
          "submitter_uuid": "0954d146-db8c-4772-aafe-2effc7c0e0c0",
          "name": "Full Name",
          "type": "text",
          "required": true,
          "preferences": {},
          "areas": [
            {
              "x": 0.2638888888888889,
              "y": 0.168958742632613,
              "w": 0.325,
              "h": 0.04616895874263263,
              "attachment_uuid": "d94e615f-76e3-46d5-8f98-36bdacb8664a",
              "page": 0
            }
          ]
        }
      ],
      "submitters": [
        {
          "name": "First Party",
          "uuid": "0954d146-db8c-4772-aafe-2effc7c0e0c0"
        }
      ],
      "author_id": 1,
      "archived_at": null,
      "created_at": "2023-12-14T15:21:57.375Z",
      "updated_at": "2023-12-14T15:22:55.094Z",
      "source": "native",
      "folder_id": 1,
      "folder_name": "Default",
      "external_id": "c248ffba-ef81-48b7-8e17-e3cecda1c1c5",
      "shared_link": true,
      "author": {
        "id": 1,
        "first_name": "John",
        "last_name": "Doe",
        "email": "john.doe@example.com"
      },
      "documents": [
        {
          "id": 5,
          "uuid": "d94e615f-76e3-46d5-8f98-36bdacb8664a",
          "url": "https://docuseal.com/file/hash/sample-document.pdf",
          "preview_image_url": "https://docuseal.com/file/hash/0.jpg",
          "filename": "example-document.pdf"
        }
      ]
    }
  ],
  "pagination": {
    "count": 1,
    "next": 1,
    "prev": 2
  }
}
```

### Get a template

get

/templates/{id}

The API endpoint provides the functionality to retrieve information about a document template.

Parameters

id Integer required 

The unique identifier of the document template.

Example: 1000001

Node.js JavaScript TypeScript Python Ruby PHP PHP (cURL) Go C# Java cURL  Copy Copied

```
const fetch = require("node-fetch");

const resp = await fetch("https://api.docuseal.com/templates/1000001", {
  method: "GET",
  headers: {
    "X-Auth-Token": "API_KEY"
  }
});

const template = await resp.json();
```

Example Response  Copy Copied

```
{
  "id": 1,
  "slug": "iRgjDX7WDK6BRo",
  "name": "Example Template",
  "preferences": {},
  "schema": [
    {
      "attachment_uuid": "d94e615f-76e3-46d5-8f98-36bdacb8664a",
      "name": "example-document"
    }
  ],
  "fields": [
    {
      "uuid": "594bdf04-d941-4ca6-aa73-93e61d625c02",
      "submitter_uuid": "0954d146-db8c-4772-aafe-2effc7c0e0c0",
      "name": "Full Name",
      "type": "text",
      "required": true,
      "preferences": {},
      "areas": [
        {
          "x": 0.2638888888888889,
          "y": 0.168958742632613,
          "w": 0.325,
          "h": 0.04616895874263263,
          "attachment_uuid": "d94e615f-76e3-46d5-8f98-36bdacb8664a",
          "page": 0
        }
      ]
    }
  ],
  "submitters": [
    {
      "name": "First Party",
      "uuid": "0954d146-db8c-4772-aafe-2effc7c0e0c0"
    }
  ],
  "author_id": 1,
  "archived_at": null,
  "created_at": "2023-12-14T15:21:57.375Z",
  "updated_at": "2023-12-14T15:22:55.094Z",
  "source": "native",
  "folder_id": 1,
  "folder_name": "Default",
  "external_id": "c248ffba-ef81-48b7-8e17-e3cecda1c1c5",
  "shared_link": true,
  "author": {
    "id": 1,
    "first_name": "John",
    "last_name": "Doe",
    "email": "john.doe@example.com"
  },
  "documents": [
    {
      "id": 5,
      "uuid": "d94e615f-76e3-46d5-8f98-36bdacb8664a",
      "url": "https://docuseal.com/file/hash/sample-document.pdf",
      "preview_image_url": "https://docuseal.com/file/hash/0.jpg",
      "filename": "example-document.pdf"
    }
  ]
}
```

### Create a template from PDF

[Pro](/pricing)

post

/templates/pdf

The API endpoint provides the functionality to create a fillable document template for a PDF file. Use `{{Field Name;role=Signer1;type=date}}` text tags to define fillable fields in the document. See [https://www.docuseal.com/examples/fieldtags.pdf](https://www.docuseal.com/examples/fieldtags.pdf) for more text tag formats. Or specify the exact pixel coordinates of the document fields using \`fields\` param.  
**Related Guides**  
[Use embedded text field tags to create a fillable form](https://www.docuseal.com/guides/use-embedded-text-field-tags-in-the-pdf-to-create-a-fillable-form)

Request Body Properties

name String 

Name of the template

Example: Test PDF

folder\_name String 

The folder's name to which the template should be created.

external\_id String 

Your application-specific unique string key to identify this template within your app. Existing template with specified \`external\_id\` will be updated with a new PDF.

Example: unique-key

shared\_link Boolean 

set to \`true\` to make the template available via a shared link. This will allow anyone with the link to create a submission from this template.

Default: true

documents Array required 

Child parameters

name String required 

Name of the document.

file String required 

Base64-encoded content of the PDF file or downloadable file URL.

Example: base64

fields Array 

Fields are optional if you use {{...}} text tags to define fields in the document.

Child parameters

name String 

Name of the field.

type String 

Type of the field (e.g., text, signature, date, initials).

Possible values: heading, text, signature, initials, date, number, image, checkbox, multiple, file, radio, select, cells, stamp, payment, phone, verification, strikethrough

role String 

Role name of the signer.

required Boolean 

Indicates if the field is required.

title String 

Field title displayed to the user instead of the name, shown on the signing form. Supports Markdown.

description String 

Field description displayed on the signing form. Supports Markdown.

areas Array 

Child parameters

x Number required 

X-coordinate of the field area.

y Number required 

Y-coordinate of the field area.

w Number required 

Width of the field area.

h Number required 

Height of the field area.

page Integer required 

Page number of the field area. Starts from 1.

Example: 1

option String 

Option string value for 'radio' and 'multiple' select field types.

options Array 

An array of option values for 'select' field type.

Example: \["Option A","Option B"\]

validation Object 

pattern String 

HTML field validation pattern string based on [https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/pattern](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/pattern) specification.

Example: \[A-Z\]{4}

message String 

A custom error message to display on validation failure.

min Number | String 

Minimum allowed number value or date depending on field type.

max Number | String 

Maximum allowed number value or date depending on field type.

step Number 

Increment step for number field. Pass 1 to accept only integers, or 0.01 to accept decimal currency.

preferences Object 

font\_size Integer 

Font size of the field value in pixels.

Example: 12

font\_type String 

Font type of the field value.

Possible values: bold, italic, bold\_italic

font String 

Font family of the field value.

Possible values: Times, Helvetica, Courier

color String 

Font color of the field value.

Default: black

Possible values: black, white, blue

align String 

Horizontal alignment of the field text value.

Default: left

Possible values: left, center, right

valign String 

Vertical alignment of the field text value.

Default: center

Possible values: top, center, bottom

format String 

The data format for different field types.  
\- Date field: accepts formats such as DD/MM/YYYY (default: MM/DD/YYYY).  
\- Signature field: accepts drawn, typed, drawn\_or\_typed (default), or upload.  
\- Number field: accepts currency formats such as usd, eur, gbp.

Example: DD/MM/YYYY

price Number 

Price value of the payment field. Only for payment fields.

Example: 99.99

currency String 

Currency value of the payment field. Only for payment fields.

Default: USD

Possible values: USD, EUR, GBP, CAD, AUD

mask Integer | Boolean 

Set \`true\` to make sensitive data masked on the document.

Default: false

Show All

flatten Boolean 

Remove PDF form fields from the documents.

Default: false

remove\_tags Boolean 

Pass \`false\` to disable the removal of {{text}} tags from the PDF. This can be used along with transparent text tags for faster and more robust PDF processing.

Default: true

Node.js JSON JavaScript TypeScript Python Ruby PHP PHP (cURL) Go C# Java cURL  Copy Copied

```
const fetch = require("node-fetch");

const resp = await fetch("https://api.docuseal.com/templates/pdf", {
  method: "POST",
  headers: {
    "X-Auth-Token": "API_KEY"
  },
  body: JSON.stringify({
    name: "Test PDF",
    documents: [
      {
        name: "string",
        file: "base64",
        fields: [
          {
            name: "string",
            areas: [
              {
                x: 0,
                y: 0,
                w: 0,
                h: 0,
                page: 1
              }
            ]
          }
        ]
      }
    ]
  })
});

const template = await resp.json();
```

Example Response  Copy Copied

```
{
  "id": 5,
  "slug": "s3ff992CoPjvaX",
  "name": "Demo PDF",
  "schema": [
    {
      "name": "Demo PDF",
      "attachment_uuid": "48d2998f-266b-47e4-beb2-250ab7ccebdf"
    }
  ],
  "fields": [
    {
      "name": "Name",
      "type": "text",
      "required": true,
      "uuid": "d0bf3c0c-1928-40c8-80f9-d9f3c6ad4eff",
      "submitter_uuid": "0b0bff58-bc9a-475d-b4a9-2f3e5323faf7",
      "areas": [
        {
          "page": 1,
          "attachment_uuid": "48d2998f-266b-47e4-beb2-250ab7ccebdf",
          "x": 0.403158189124654,
          "y": 0.04211750189825361,
          "w": 0.100684625476058,
          "h": 0.01423690205011389
        }
      ]
    }
  ],
  "submitters": [
    {
      "name": "Submitter",
      "uuid": "0b0bff58-bc9a-475d-b4a9-2f3e5323faf7"
    }
  ],
  "author_id": 1,
  "archived_at": null,
  "created_at": "2023-12-14T15:50:21.799Z",
  "updated_at": "2023-12-14T15:50:21.799Z",
  "source": "api",
  "folder_id": 1,
  "folder_name": "Default",
  "external_id": "c248ffba-ef81-48b7-8e17-e3cecda1c1c5",
  "shared_link": true,
  "author": {
    "id": 1,
    "first_name": "John",
    "last_name": "Doe",
    "email": "john.doe@example.com"
  },
  "documents": [
    {
      "id": 7,
      "uuid": "48d2998f-266b-47e4-beb2-250ab7ccebdf",
      "url": "https://docuseal.com/file/hash/Demo%20PDF.pdf"
    }
  ]
}
```

### Create a template from Word DOCX

[Pro](/pricing)

post

/templates/docx

The API endpoint provides the functionality to create a fillable document template for existing Microsoft Word document. Use `{{Field Name;role=Signer1;type=date}}` text tags to define fillable fields in the document. See [https://www.docuseal.com/examples/fieldtags.docx](https://www.docuseal.com/examples/fieldtags.docx) for more text tag formats. Or specify the exact pixel coordinates of the document fields using \`fields\` param.  
**Related Guides**  
[Use embedded text field tags to create a fillable form](https://www.docuseal.com/guides/use-embedded-text-field-tags-in-the-pdf-to-create-a-fillable-form)

Request Body Properties

name String 

Name of the template

Example: Test DOCX

external\_id String 

Your application-specific unique string key to identify this template within your app. Existing template with specified \`external\_id\` will be updated with a new document.

Example: unique-key

folder\_name String 

The folder's name to which the template should be created.

shared\_link Boolean 

set to \`true\` to make the template available via a shared link. This will allow anyone with the link to create a submission from this template.

Default: true

documents Array required 

Child parameters

name String required 

Name of the document.

file String required 

Base64-encoded content of the DOCX file or downloadable file URL

Example: base64

fields Array 

Fields are optional if you use {{...}} text tags to define fields in the document.

Child parameters

name String 

Name of the field.

type String 

Type of the field (e.g., text, signature, date, initials).

Possible values: heading, text, signature, initials, date, number, image, checkbox, multiple, file, radio, select, cells, stamp, payment, phone, verification, strikethrough

role String 

Role name of the signer.

required Boolean 

Indicates if the field is required.

title String 

Field title displayed to the user instead of the name, shown on the signing form. Supports Markdown.

description String 

Field description displayed on the signing form. Supports Markdown.

areas Array 

Child parameters

x Number 

X-coordinate of the field area.

y Number 

Y-coordinate of the field area.

w Number 

Width of the field area.

h Number 

Height of the field area.

page Integer 

Page number of the field area. Starts from 1.

option String 

Option string value for 'radio' and 'multiple' select field types.

options Array 

An array of option values for 'select' field type.

Example: \["Option A","Option B"\]

validation Object 

pattern String 

HTML field validation pattern string based on [https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/pattern](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/pattern) specification.

Example: \[A-Z\]{4}

message String 

A custom error message to display on validation failure.

min Number | String 

Minimum allowed number value or date depending on field type.

max Number | String 

Maximum allowed number value or date depending on field type.

step Number 

Increment step for number field. Pass 1 to accept only integers, or 0.01 to accept decimal currency.

preferences Object 

font\_size Integer 

Font size of the field value in pixels.

Example: 12

font\_type String 

Font type of the field value.

Possible values: bold, italic, bold\_italic

font String 

Font family of the field value.

Possible values: Times, Helvetica, Courier

color String 

Font color of the field value.

Default: black

Possible values: black, white, blue

align String 

Horizontal alignment of the field text value.

Default: left

Possible values: left, center, right

valign String 

Vertical alignment of the field text value.

Default: center

Possible values: top, center, bottom

format String 

The data format for different field types.  
\- Date field: accepts formats such as DD/MM/YYYY (default: MM/DD/YYYY).  
\- Signature field: accepts drawn, typed, drawn\_or\_typed (default), or upload.  
\- Number field: accepts currency formats such as usd, eur, gbp.

Example: DD/MM/YYYY

price Number 

Price value of the payment field. Only for payment fields.

Example: 99.99

currency String 

Currency value of the payment field. Only for payment fields.

Default: USD

Possible values: USD, EUR, GBP, CAD, AUD

mask Integer | Boolean 

Set \`true\` to make sensitive data masked on the document.

Default: false

Show All

Node.js JSON JavaScript TypeScript Python Ruby PHP PHP (cURL) Go C# Java cURL  Copy Copied

```
const fetch = require("node-fetch");

const resp = await fetch("https://api.docuseal.com/templates/docx", {
  method: "POST",
  headers: {
    "X-Auth-Token": "API_KEY"
  },
  body: JSON.stringify({
    name: "Test DOCX",
    documents: [
      {
        name: "string",
        file: "base64"
      }
    ]
  })
});

const template = await resp.json();
```

Example Response  Copy Copied

```
{
  "id": 5,
  "slug": "s3ff992CoPjvaX",
  "name": "Demo PDF",
  "schema": [
    {
      "name": "Demo PDF",
      "attachment_uuid": "48d2998f-266b-47e4-beb2-250ab7ccebdf"
    }
  ],
  "fields": [
    {
      "name": "Name",
      "type": "text",
      "required": true,
      "uuid": "d0bf3c0c-1928-40c8-80f9-d9f3c6ad4eff",
      "submitter_uuid": "0b0bff58-bc9a-475d-b4a9-2f3e5323faf7",
      "areas": [
        {
          "page": 1,
          "attachment_uuid": "48d2998f-266b-47e4-beb2-250ab7ccebdf",
          "x": 0.403158189124654,
          "y": 0.04211750189825361,
          "w": 0.100684625476058,
          "h": 0.01423690205011389
        }
      ]
    }
  ],
  "submitters": [
    {
      "name": "Submitter",
      "uuid": "0b0bff58-bc9a-475d-b4a9-2f3e5323faf7"
    }
  ],
  "author_id": 1,
  "archived_at": null,
  "created_at": "2023-12-14T15:50:21.799Z",
  "updated_at": "2023-12-14T15:50:21.799Z",
  "source": "api",
  "folder_id": 1,
  "folder_name": "Default",
  "external_id": "c248ffba-ef81-48b7-8e17-e3cecda1c1c5",
  "shared_link": true,
  "author": {
    "id": 1,
    "first_name": "John",
    "last_name": "Doe",
    "email": "john.doe@example.com"
  },
  "documents": [
    {
      "id": 7,
      "uuid": "48d2998f-266b-47e4-beb2-250ab7ccebdf",
      "url": "https://docuseal.com/hash/DemoPDF.pdf"
    }
  ]
}
```

### Create a template from HTML

[Pro](/pricing)

post

/templates/html

The API endpoint provides the functionality to seamlessly generate a PDF document template by utilizing the provided HTML content while incorporating pre-defined fields.  
**Related Guides**  
[Create PDF document fillable form with HTML](https://www.docuseal.com/guides/create-pdf-document-fillable-form-with-html-api)

Request Body Properties

html String required 

HTML template with field tags.

Example: <p>Lorem Ipsum is simply dummy text of the <text-field name="Industry" role="First Party" required="false" style="width: 80px; height: 16px; display: inline-block; margin-bottom: -4px"> </text-field> and typesetting industry</p>

html\_header String 

HTML template of the header to be displayed on every page.

html\_footer String 

HTML template of the footer to be displayed on every page.

name String 

Template name. Random uuid will be assigned when not specified.

Example: Test Template

size String 

Page size. Letter 8.5 x 11 will be assigned when not specified.

Default: Letter

Possible values: Letter, Legal, Tabloid, Ledger, A0, A1, A2, A3, A4, A5, A6

Example: A4

external\_id String 

Your application-specific unique string key to identify this template within your app. Existing template with specified \`external\_id\` will be updated with a new HTML.

Example: 714d974e-83d8-11ee-b962-0242ac120002

folder\_name String 

The folder's name to which the template should be created.

shared\_link Boolean 

set to \`true\` to make the template available via a shared link. This will allow anyone with the link to create a submission from this template.

Default: true

documents Array 

The list of documents built from HTML. Can be used to create a template with multiple documents. Leave \`documents\` param empty when using a top-level \`html\` param for a template with a single document.

Child parameters

html String required 

HTML template with field tags.

Example: <p>Lorem Ipsum is simply dummy text of the <text-field name="Industry" role="First Party" required="false" style="width: 80px; height: 16px; display: inline-block; margin-bottom: -4px"> </text-field> and typesetting industry</p>

name String 

Document name. Random uuid will be assigned when not specified.

Example: Test Document

Node.js JSON JavaScript TypeScript Python Ruby PHP PHP (cURL) Go C# Java cURL  Copy Copied

```
const fetch = require("node-fetch");

const resp = await fetch("https://api.docuseal.com/templates/html", {
  method: "POST",
  headers: {
    "X-Auth-Token": "API_KEY"
  },
  body: JSON.stringify({
    html: `<p>Lorem Ipsum is simply dummy text of the
<text-field
  name="Industry"
  role="First Party"
  required="false"
  style="width: 80px; height: 16px; display: inline-block; margin-bottom: -4px">
</text-field>
and typesetting industry</p>
`,
    name: "Test Template"
  })
});

const template = await resp.json();
```

Example Response  Copy Copied

```
{
  "id": 3,
  "slug": "ZQpF222rFBv71q",
  "name": "Demo Template",
  "schema": [
    {
      "name": "Demo Template",
      "attachment_uuid": "09a8bc73-a7a9-4fd9-8173-95752bdf0af5"
    }
  ],
  "fields": [
    {
      "name": "Name",
      "required": false,
      "type": "text",
      "uuid": "a06c49f6-4b20-4442-ac7f-c1040d2cf1ac",
      "submitter_uuid": "93ba628c-5913-4456-a1e9-1a81ad7444b3",
      "areas": [
        {
          "page": 0,
          "attachment_uuid": "09a8bc73-a7a9-4fd9-8173-95752bdf0af5",
          "x": 0.403158189124654,
          "y": 0.04211750189825361,
          "w": 0.100684625476058,
          "h": 0.01423690205011389
        }
      ]
    }
  ],
  "submitters": [
    {
      "name": "Submitter",
      "uuid": "93ba628c-5913-4456-a1e9-1a81ad7444b3"
    }
  ],
  "author_id": 1,
  "archived_at": null,
  "created_at": "2023-12-14T15:50:21.799Z",
  "updated_at": "2023-12-14T15:50:21.799Z",
  "source": "api",
  "folder_id": 1,
  "folder_name": "Default",
  "external_id": "f0b4714f-e44b-4993-905b-68b4451eef8c",
  "shared_link": true,
  "author": {
    "id": 1,
    "first_name": "John",
    "last_name": "Doe",
    "email": "john.doe@example.com"
  },
  "documents": [
    {
      "id": 3,
      "uuid": "09a8bc73-a7a9-4fd9-8173-95752bdf0af5",
      "url": "https://docuseal.com/file/hash/Test%20Template.pdf"
    }
  ]
}
```

### Clone a template

post

/templates/{id}/clone

The API endpoint allows you to clone existing template into a new template.

Parameters

id Integer required 

The unique identifier of the documents template.

Example: 1000001

Request Body Properties

name String 

Template name. Existing name with (Clone) suffix will be used if not specified.

Example: Cloned Template

folder\_name String 

The folder's name to which the template should be cloned.

external\_id String 

Your application-specific unique string key to identify this template within your app.

Node.js JSON JavaScript TypeScript Python Ruby PHP PHP (cURL) Go C# Java cURL  Copy Copied

```
const fetch = require("node-fetch");

const resp = await fetch("https://api.docuseal.com/templates/1000001/clone", {
  method: "POST",
  headers: {
    "X-Auth-Token": "API_KEY"
  },
  body: JSON.stringify({
    name: "Cloned Template"
  })
});

const template = await resp.json();
```

Example Response  Copy Copied

```
{
  "id": 6,
  "slug": "Xc7opTqwwV9P7x",
  "name": "Cloned Template",
  "schema": [
    {
      "attachment_uuid": "68aa0716-61f0-4535-9ba4-6c00f835b080",
      "name": "sample-document"
    }
  ],
  "fields": [
    {
      "uuid": "93c7065b-1b19-4551-b67b-9946bf1c11c9",
      "submitter_uuid": "ad128012-756d-4d17-b728-6f6b1d482bb5",
      "name": "Name",
      "type": "text",
      "required": true,
      "areas": [
        {
          "page": 0,
          "attachment_uuid": "09a8bc73-a7a9-4fd9-8173-95752bdf0af5",
          "x": 0.403158189124654,
          "y": 0.04211750189825361,
          "w": 0.100684625476058,
          "h": 0.01423690205011389
        }
      ]
    }
  ],
  "submitters": [
    {
      "name": "First Party",
      "uuid": "ad128012-756d-4d17-b728-6f6b1d482bb5"
    }
  ],
  "author_id": 1,
  "archived_at": null,
  "created_at": "2023-12-14T15:50:21.799Z",
  "updated_at": "2023-12-14T15:50:21.799Z",
  "source": "api",
  "folder_id": 2,
  "folder_name": "Default",
  "external_id": null,
  "shared_link": true,
  "author": {
    "id": 1,
    "first_name": "John",
    "last_name": "Doe",
    "email": "john.doe@example.com"
  },
  "documents": [
    {
      "id": 9,
      "uuid": "ded62277-9705-4fac-b5dc-58325d4102eb",
      "url": "https://docuseal.com/file/hash/sample-document.pdf",
      "filename": "sample-document.pdf"
    }
  ]
}
```

### Merge templates

[Pro](/pricing)

post

/templates/merge

The API endpoint allows you to merge multiple templates with documents and fields into a new combined template.

Request Body Properties

template\_ids Array required 

An array of template ids to merge into a new template.

Example: \[321,432\]

name String 

Template name. Existing name with (Merged) suffix will be used if not specified.

Example: Merged Template

folder\_name String 

The name of the folder in which the merged template should be placed.

external\_id String 

Your application-specific unique string key to identify this template within your app.

shared\_link Boolean 

set to \`true\` to make the template available via a shared link. This will allow anyone with the link to create a submission from this template.

Default: true

roles Array 

An array of submitter role names to be used in the merged template.

Example: \["Agent","Customer"\]

Node.js JSON JavaScript TypeScript Python Ruby PHP PHP (cURL) Go C# Java cURL  Copy Copied

```
const fetch = require("node-fetch");

const resp = await fetch("https://api.docuseal.com/templates/merge", {
  method: "POST",
  headers: {
    "X-Auth-Token": "API_KEY"
  },
  body: JSON.stringify({
    template_ids: [
      321,
      432
    ],
    name: "Merged Template"
  })
});

const template = await resp.json();
```

Example Response  Copy Copied

```
{
  "id": 6,
  "slug": "Xc7opTqwwV9P7x",
  "name": "Merged Template",
  "schema": [
    {
      "attachment_uuid": "68aa0716-61f0-4535-9ba4-6c00f835b080",
      "name": "sample-document"
    }
  ],
  "fields": [
    {
      "uuid": "93c7065b-1b19-4551-b67b-9946bf1c11c9",
      "submitter_uuid": "ad128012-756d-4d17-b728-6f6b1d482bb5",
      "name": "Name",
      "type": "text",
      "required": true,
      "areas": [
        {
          "page": 0,
          "attachment_uuid": "09a8bc73-a7a9-4fd9-8173-95752bdf0af5",
          "x": 0.403158189124654,
          "y": 0.04211750189825361,
          "w": 0.100684625476058,
          "h": 0.01423690205011389
        }
      ]
    }
  ],
  "submitters": [
    {
      "name": "First Party",
      "uuid": "ad128012-756d-4d17-b728-6f6b1d482bb5"
    }
  ],
  "author_id": 1,
  "archived_at": null,
  "created_at": "2023-12-14T15:50:21.799Z",
  "updated_at": "2023-12-14T15:50:21.799Z",
  "source": "api",
  "folder_id": 2,
  "folder_name": "Default",
  "external_id": null,
  "shared_link": true,
  "author": {
    "id": 1,
    "first_name": "John",
    "last_name": "Doe",
    "email": "john.doe@example.com"
  },
  "documents": [
    {
      "id": 9,
      "uuid": "ded62277-9705-4fac-b5dc-58325d4102eb",
      "url": "https://docuseal.com/file/hash/sample-document.pdf",
      "filename": "sample-document.pdf"
    }
  ]
}
```

### Update a template

put

/templates/{id}

The API endpoint provides the functionality to move a document template to a different folder and update the name of the template.

Parameters

id Integer required 

The unique identifier of the document template.

Example: 1000001

Request Body Properties

name String 

The name of the template

Example: New Document Name

folder\_name String 

The folder's name to which the template should be moved.

Example: New Folder

roles Array 

An array of submitter role names to update the template with.

Example: \["Agent","Customer"\]

archived Boolean 

Set \`false\` to unarchive template.

Node.js JSON JavaScript TypeScript Python Ruby PHP PHP (cURL) Go C# Java cURL  Copy Copied

```
const fetch = require("node-fetch");

const resp = await fetch("https://api.docuseal.com/templates/1000001", {
  method: "PUT",
  headers: {
    "X-Auth-Token": "API_KEY"
  },
  body: JSON.stringify({
    name: "New Document Name",
    folder_name: "New Folder"
  })
});

const template = await resp.json();
```

Example Response  Copy Copied

```
{
  "id": 1,
  "updated_at": "2023-12-14T15:50:21.799Z"
}
```

### Update template documents

[Pro](/pricing)

put

/templates/{id}/documents

The API endpoint allows you to add, remove or replace documents in the template with provided PDF/DOCX file or HTML content.

Parameters

id Integer required 

The unique identifier of the documents template.

Example: 1000001

Request Body Properties

documents Array 

The list of documents to add or replace in the template.

Child parameters

name String 

Document name. Random uuid will be assigned when not specified.

Example: Test Template

file String 

Base64-encoded content of the PDF or DOCX file or downloadable file URL. Leave it empty if you create a new document using HTML param.

html String 

HTML template with field tags. Leave it empty if you add a document via PDF or DOCX base64 encoded file param or URL.

position Integer 

Position of the document. By default will be added as the last document in the template.

Example: 0

replace Boolean 

Set to \`true\` to replace existing document with a new file at \`position\`. Existing document fields will be transferred to the new document if it doesn't contain any fields.

Default: false

remove Boolean 

Set to \`true\` to remove existing document at given \`position\` or with given \`name\`.

Default: false

merge Boolean 

Set to \`true\` to merge all existing and new documents into a single PDF document in the template.

Default: false

Node.js JSON JavaScript TypeScript Python Ruby PHP PHP (cURL) Go C# Java cURL  Copy Copied

```
const fetch = require("node-fetch");

const resp = await fetch("https://api.docuseal.com/templates/1000001/documents", {
  method: "PUT",
  headers: {
    "X-Auth-Token": "API_KEY"
  },
  body: JSON.stringify({
    documents: [
      {
        file: "string"
      }
    ]
  })
});

const template = await resp.json();
```

Example Response  Copy Copied

```
{
  "id": 3,
  "slug": "ZQpF222rFBv71q",
  "name": "Demo Template",
  "schema": [
    {
      "name": "Demo Template",
      "attachment_uuid": "09a8bc73-a7a9-4fd9-8173-95752bdf0af5"
    }
  ],
  "fields": [
    {
      "name": "Name",
      "required": false,
      "type": "text",
      "uuid": "a06c49f6-4b20-4442-ac7f-c1040d2cf1ac",
      "submitter_uuid": "93ba628c-5913-4456-a1e9-1a81ad7444b3",
      "areas": [
        {
          "page": 0,
          "attachment_uuid": "09a8bc73-a7a9-4fd9-8173-95752bdf0af5",
          "x": 0.403158189124654,
          "y": 0.04211750189825361,
          "w": 0.100684625476058,
          "h": 0.01423690205011389
        }
      ]
    }
  ],
  "submitters": [
    {
      "name": "Submitter",
      "uuid": "93ba628c-5913-4456-a1e9-1a81ad7444b3"
    }
  ],
  "author_id": 1,
  "archived_at": null,
  "created_at": "2023-12-14T15:50:21.799Z",
  "updated_at": "2023-12-14T15:50:21.799Z",
  "source": "api",
  "folder_id": 1,
  "folder_name": "Default",
  "external_id": "f0b4714f-e44b-4993-905b-68b4451eef8c",
  "author": {
    "id": 1,
    "first_name": "John",
    "last_name": "Doe",
    "email": "john.doe@example.com"
  },
  "documents": [
    {
      "id": 3,
      "uuid": "09a8bc73-a7a9-4fd9-8173-95752bdf0af5",
      "url": "https://docuseal.com/file/hash/Test%20Template.pdf"
    }
  ]
}
```

### Archive a template

delete

/templates/{id}

The API endpoint allows you to archive a document template.

Parameters

id Integer required 

The unique identifier of the document template.

Example: 1000001

Node.js JavaScript TypeScript Python Ruby PHP PHP (cURL) Go C# Java cURL  Copy Copied

```
const fetch = require("node-fetch");

const resp = await fetch("https://api.docuseal.com/templates/1000001", {
  method: "DELETE",
  headers: {
    "X-Auth-Token": "API_KEY"
  }
});

await resp.json();
```

Example Response  Copy Copied

```
{
  "id": 1,
  "archived_at": "2023-12-14T15:50:21.799Z"
}
```

## Webhooks

Send document signing events to a preconfigured webhook URL. You can use this feature to capture and process document-related events in real-time.

[Set Webhook URL](https://console.docuseal.com/webhooks)

## Form Webhook

During the form filling and signing process, 3 types of events may occur and are dispatched at different stages:

-   **'form.viewed'** event is triggered when the submitter first opens the form.
-   **'form.started'** event is triggered when the submitter initiates filling out the form.
-   **'form.completed'** event is triggered upon successful form completion and signing by one of the parties.
-   **'form.declined'** event is triggered when a signer declines the submission.

It's important to note that each of these events contain information available at the time of dispatch, so some data may be missing or incomplete depending on the specific event. Failed webhook requests (4xx, 5xx) are automatically retried multiple times within 48 hours (every 2^attempt minutes) for all production accounts.  
**Related Guides**  
[Download Signed Documents](https://www.docuseal.com/guides/download-signed-documents)

event\_type String 

The event type.

Possible values: form.viewed, form.started, form.completed

timestamp String 

The event timestamp.

Example: 2023-09-24T11:20:42Z

data Object 

Submitted data object.

id Number 

The submitter's unique identifier.

submission\_id Number 

The unique submission identifier.

email String 

The submitter's email address

Example: john.doe@example.com

ua String 

The user agent string that provides information about the submitter's web browser.

Example: Mozilla/5.0 (Macintosh; Intel Mac OS X 10\_15\_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36

ip String 

The submitter's IP address.

name String 

The submitter's name.

phone String 

The submitter's phone number, formatted according to the E.164 standard.

Example: +1234567890

role String 

The submitter's role name or title.

Example: First Party

external\_id String 

Your application-specific unique string key to identify submitter within your app.

application\_key String 

Your application-specific unique string key to identify submitter within your app. Backward compatibility with the previous version of the API. Use external\_id instead.

decline\_reason String 

Submitter provided decline message.

sent\_at String 

status String 

The submitter status.

Possible values: completed, declined, opened, sent, awaiting

opened\_at String 

completed\_at String 

declined\_at String 

created\_at String 

updated\_at String 

submission Object 

The submission details.

id Number 

The submission's unique identifier.

audit\_log\_url String 

The audit log PDF URL. Available only if the submission was completed by all submitters.

combined\_document\_url String 

The URL of the combined documents with audit log. Combined documents can be enabled via [/settings/accounts](https://docuseal.com/settings/account).

status String 

The submission status.

Possible values: completed, declined, expired, pending

url String 

The submission URL.

variables Object 

Dynamic content variables object.

created\_at String 

The submission creation date.

template Object 

Base template details.

id Number 

The template's unique identifier.

name String 

The template's name.

external\_id String 

Your application-specific unique string key to identify template within your app.

created\_at String 

updated\_at String 

folder\_name String 

Template folder name.

preferences Object 

send\_email Boolean 

The flag indicating whether the submitter has opted to receive an email.

send\_sms Boolean 

The flag indicating whether the submitter has opted to receive an SMS.

values Array 

List of the filled values passed by the submitter.

Child parameters

field String 

The field name.

values String 

The field value.

metadata Object 

Metadata object with additional submitter information.

audit\_log\_url String 

The audit log PDF URL. Available only if the submission was completed by all submitters.

submission\_url String 

The submission URL.

documents Array 

Child parameters

name String 

The document file name.

url String 

The document file URL.

 Copy Copied

```
{
  "event_type": "form.completed",
  "timestamp": "2023-09-24T13:48:36Z",
  "data": {
    "id": 1,
    "submission_id": 12,
    "email": "john.doe@example.com",
    "ua": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36",
    "ip": "132.216.88.83",
    "sent_at": "2023-08-20T10:09:05.459Z",
    "opened_at": "2023-08-20T10:10:00.451Z",
    "completed_at": "2023-08-20T10:12:47.579Z",
    "declined_at": null,
    "created_at": "2023-08-20T10:09:02.459Z",
    "updated_at": "2023-08-20T10:12:47.907Z",
    "name": null,
    "phone": null,
    "role": "First Party",
    "external_id": null,
    "application_key": null,
    "decline_reason": null,
    "status": "completed",
    "preferences": {
      "send_email": true,
      "send_sms": false
    },
    "submission": {
      "id": 12,
      "audit_log_url": "https://docuseal.com/blobs/proxy/eyJfcmFpbHMiOnsib/audit-log.pdf",
      "combined_document_url": "https://docuseal.com/blobs/proxy/eyJfcmFpbHMiOnsib/document.pdf",
      "status": "completed",
      "url": "https://docuseal.com/e/N5JsdkFGPeQF7J",
      "variables": {
        "custom_variable": "value"
      },
      "created_at": "2023-08-20T10:09:05.258Z"
    },
    "template": {
      "id": 6,
      "name": "Invoice",
      "external_id": null,
      "created_at": "2023-08-19T11:09:21.487Z",
      "updated_at": "2023-08-19T11:11:47.804Z",
      "folder_name": "Default"
    },
    "values": [
      {
        "field": "First Name",
        "value": "John"
      },
      {
        "field": "Last Name",
        "value": "Doe"
      },
      {
        "field": "Signature",
        "value": "https://docuseal.com/blobs/proxy/eyJfcmFpbHMiOnsib/signature.png"
      },
      {
        "field": "Signature",
        "value": "John Doe"
      }
    ],
    "metadata": {
      "customData": "custom value"
    },
    "audit_log_url": "https://docuseal.com/blobs/proxy/eyJfcmFpbHMiOnsib/audit-log.pdf",
    "submission_url": "https://docuseal.com/e/N5JsdkFGPeQF7J",
    "documents": [
      {
        "name": "sample-document",
        "url": "https://docuseal.com/blobs/proxy/eyJfcmFpbHMiOnsib/sample-document.pdf"
      }
    ]
  }
}
```

## Submission Webhook

Get submission creation, completion, expiration, and archiving notifications using these events:

-   **'submission.created'** event is triggered when the submission is created.
-   **'submission.completed'** event is triggered when the submission is completed by all signing parties.
-   **'submission.expired'** event is triggered when the submission expires.
-   **'submission.archived'** event is triggered when the submission is archived.

event\_type String 

The event type.

Possible values: submission.created, submission.archived

timestamp String 

The event timestamp.

Example: 2023-09-24T11:20:42Z

data Object 

Submitted data object.

id Number 

The submission's unique identifier.

archived\_at String 

The submission archive date.

created\_at String 

The submission creation date.

updated\_at String 

The submission update date.

source String 

The submission source.

Possible values: invite, bulk, api, embed, link

submitters\_order String 

The submitters order.

Possible values: random, preserved

audit\_log\_url String 

Audit log file URL.

submitters Array 

The list of submitters for the submission.

Child parameters

id Number 

The submitter's unique identifier.

submission\_id Number 

The unique submission identifier.

uuid String 

The submitter UUID.

email String 

The email address of the submitter.

Example: john.doe@example.com

slug String 

The unique slug of the document template.

sent\_at String 

The date and time when the signing request was sent to the submitter.

opened\_at String 

The date and time when the submitter opened the signing form.

completed\_at String 

The date and time when the submitter completed the signing form.

declined\_at String 

The date and time when the submitter declined the signing form.

created\_at String 

The date and time when the submitter was created.

updated\_at String 

The date and time when the submitter was last updated.

name String 

The name of the submitter.

phone String 

The phone number of the submitter, formatted according to the E.164 standard.

Example: +1234567890

role String 

The role name or title of the submitter.

Example: First Party

external\_id String 

Your application-specific unique string key to identify this submitter within your app.

metadata Object 

Metadata object with additional submitter information.

Example: { 'customField': 'value' }

status String 

The submitter status.

Possible values: completed, declined, opened, sent, awaiting

application\_key String 

Your application-specific unique string key to identify this submitter within your app.

values Object 

An object with pre-filled values for the submission. Use field names for keys of the object. For more configurations see \`fields\` param.

documents Array 

The list of documents for the submission.

Child parameters

name String 

The document file name.

url String 

The document file URL.

preferences Object 

The submitter preferences.

template Object 

Base template details.

id Number 

The template's unique identifier.

name String 

The template's name.

external\_id String 

Your application-specific unique string key to identify template within your app.

folder\_name String 

The folder name.

created\_at String 

The date and time when the template was created.

updated\_at String 

The date and time when the template was last updated.

variables Object 

Dynamic content variables object.

created\_by\_user Object 

id Integer 

Unique identifier of the user who created the submission.

first\_name String 

The first name of the user who created the submission.

last\_name String 

The last name of the user who created the submission.

email String 

The email address of the user who created the submission.

submission\_events Array 

Child parameters

id Integer 

Submission event unique ID number.

submitter\_id Integer 

Unique identifier of the submitter that triggered the event.

event\_type String 

Event type.

Possible values: send\_email, bounce\_email, complaint\_email, send\_reminder\_email, send\_sms, send\_2fa\_sms, open\_email, click\_email, click\_sms, phone\_verified, start\_form, start\_verification, complete\_verification, view\_form, invite\_party, complete\_form, decline\_form, api\_complete\_form

event\_timestamp String 

Date and time when the event was triggered.

documents Array 

Child parameters

name String 

Document name.

url String 

Document URL.

status String 

The status of the submission.

Possible values: completed, declined, expired, pending

completed\_at String 

The date and time when the submission was fully completed.

 Copy Copied

```
{
  "event_type": "submission.created",
  "timestamp": "2024-05-26T17:32:33.518Z",
  "data": {
    "id": 1,
    "archived_at": null,
    "created_at": "2024-05-26T17:32:33.447Z",
    "updated_at": "2024-05-26T17:32:33.447Z",
    "source": "invite",
    "submitters_order": "random",
    "audit_log_url": null,
    "submitters": [
      {
        "id": 1,
        "submission_id": 1,
        "uuid": "6b92a2d0-b511-4678-bccf-1e8a131f5030",
        "email": "mike@example.com",
        "slug": "S6fWFYRZus6suW",
        "sent_at": null,
        "opened_at": null,
        "completed_at": null,
        "declined_at": null,
        "created_at": "2024-05-26T17:32:33.466Z",
        "updated_at": "2024-05-26T17:32:33.466Z",
        "name": null,
        "phone": null,
        "external_id": null,
        "metadata": {},
        "status": "awaiting",
        "application_key": null,
        "values": [],
        "documents": [],
        "preferences": {},
        "role": "First Party"
      }
    ],
    "template": {
      "id": 1,
      "name": "Sample Document",
      "created_at": "2024-05-26T16:57:28.092Z",
      "updated_at": "2024-05-26T16:58:07.314Z",
      "external_id": null,
      "folder_name": "Default"
    },
    "variables": {
      "custom_variable": "value"
    },
    "created_by_user": {
      "id": 1,
      "first_name": "John",
      "last_name": "Doe",
      "email": "john.doe@example.com"
    },
    "submission_events": [],
    "documents": [],
    "status": "pending",
    "completed_at": null
  }
}
```

## Template Webhook

Get template creation and update notifications using these events:

-   **'template.created'** is triggered when the template is created.
-   **'tempate.updated'** is triggered when the template is updated.

event\_type String 

The event type.

Possible values: template.created, template.updated

timestamp String 

The event timestamp.

Example: 2023-09-24T11:20:42Z

data Object 

Submitted data object.

id Number 

The template's unique identifier.

slug String 

The template's unique slug.

name String 

The template's name.

schema Array 

The template document files.

Child parameters

attachment\_uuid String 

The attachment UUID.

name String 

The attachment name.

fields Array 

The template fields.

Child parameters

uuid String 

The field UUID.

submitter\_uuid String 

The submitter role UUID.

name String 

The field name.

required Boolean 

The flag indicating whether the field is required.

preferences Object 

The field preferences.

areas Array 

List of areas where the field is located in the document.

Child parameters

x Number 

X coordinate of the area where the field is located in the document.

y Number 

Y coordinate of the area where the field is located in the document.

w Number 

Width of the area where the field is located in the document.

h Number 

Height of the area where the field is located in the document.

attachment\_uuid String 

Unique identifier of the attached document where the field is located.

page Integer 

Page number of the attached document where the field is located.

Show All

submitters Array 

Child parameters

name String 

Submitter name.

uuid String 

Unique identifier of the submitter.

author\_id Integer 

Unique identifier of the author of the template.

account\_id Integer 

Unique identifier of the account of the template.

archived\_at String 

Date and time when the template was archived.

created\_at String 

Date and time when the template was created.

updated\_at String 

Date and time when the template was updated.

source String 

Source of the template.

Possible values: native, api, embed

external\_id String 

Identifier of the template in the external system.

folder\_id Integer 

Unique identifier of the folder where the template is placed.

folder\_name String 

Folder name where the template is placed.

application\_key String 

Your application-specific unique string key to identify tempate\_id within your app.

author Object 

id Integer 

Unique identifier of the author.

first\_name String 

First name of the author.

last\_name String 

Last name of the author.

email String 

Author email.

documents Array 

List of documents attached to the template.

Child parameters

id Integer 

Unique identifier of the document.

uuid String 

Unique identifier of the document.

url String 

URL of the document.

preview\_image\_url String 

Document preview image URL.

filename String 

Document filename.

 Copy Copied

```
{
  "event_type": "template.create",
  "timestamp": "2024-05-26T16:59:47.237Z",
  "data": {
    "id": 1,
    "slug": "UwRU9ir5dvhSRY",
    "name": "Sample Document",
    "schema": [
      {
        "attachment_uuid": "84fa7c01-8b89-47e2-83f0-8623e7e4aa1c",
        "name": "sample-document"
      }
    ],
    "fields": [
      {
        "uuid": "f86dbf07-2d84-490c-b372-1aaaaf0549c1",
        "submitter_uuid": "6b92a2d0-b511-4678-bccf-1e8a131f5030",
        "name": "First Name",
        "type": "text",
        "required": true,
        "preferences": {},
        "areas": [
          {
            "x": 0.2541666666666667,
            "y": 0.2266854052667579,
            "w": 0.3132975260416667,
            "h": 0.04878270348837208,
            "attachment_uuid": "84fa7c01-8b89-47e2-83f0-8623e7e4aa1c",
            "page": 0
          }
        ]
      },
      {
        "uuid": "1b41711b-f765-41c5-b2b9-000b88b96c6e",
        "submitter_uuid": "6b92a2d0-b511-4678-bccf-1e8a131f5030",
        "name": "Last Name",
        "type": "text",
        "required": true,
        "preferences": {},
        "areas": [
          {
            "x": 0.5419813368055556,
            "y": 0.3057829599863201,
            "w": 0.2188802083333333,
            "h": 0.05516843365253077,
            "attachment_uuid": "84fa7c01-8b89-47e2-83f0-8623e7e4aa1c",
            "page": 0
          }
        ]
      }
    ],
    "submitters": [
      {
        "name": "First Party",
        "uuid": "6b92a2d0-b511-4678-bccf-1e8a131f5030"
      }
    ],
    "author_id": 1,
    "account_id": 1,
    "archived_at": null,
    "created_at": "2024-05-26T16:57:28.092Z",
    "updated_at": "2024-05-26T16:57:28.092Z",
    "source": "native",
    "folder_id": 1,
    "external_id": null,
    "preferences": {},
    "application_key": null,
    "folder_name": "Default",
    "author": {
      "id": 1,
      "first_name": "John",
      "last_name": "Doe",
      "email": "john.doe@example.com"
    },
    "documents": [
      {
        "id": 12,
        "uuid": "84fa7c01-8b89-47e2-83f0-8623e7e4aa1c",
        "url": "https://docuseal.com/file/hash/sample-document.pdf",
        "preview_image_url": "https://docuseal.com/file/hash/0.jpg",
        "filename": "sample-document.pdf"
      }
    ]
  }
}
```

[Contact Us](/contact)

 [![SOC](https://www.docuseal.com/packs/static/images/pages/soc-df335fd23c97e5311cb2.png)](/soc)[](/hipaa)[](/gdpr)

Solutions

-   [Sign Documents Online](/sign-documents-online)
-   [Document Signing API](/signing-api)
-   [Enterprise](/enterprise)
-   [Embedding](/embedding)
-   [HTML to Document](/blog/creating-fillable-pdf-document-forms-with-html)
-   [Accept Payments](/blog/accept-payments-and-request-signatures-with-ease)
-   [On-premises](/on-premises)
-   [HIPAA Compliance](/hipaa)
-   [SOC 2 Compliance](/soc)
-   [21 CFR Part 11 Compliance](/cfr)
-   [SaaS Integration](/document-signing-for-saas)

Resources

-   [API and Webhooks](/docs/api)
-   [Documentation](/docs)
-   [Developer Guides](/guides)
-   [User Resources](/resources)
-   [GDPR and EU Cloud](/gdpr)
-   [Best eSignature APIs](/best-esignature-apis)
-   [Qualified Electronic Signature](/qualified-electronic-signature)
-   [FAQ](/faq)
-   [Signature Maker](/online-signature)
-   [WordPress Integration](/wordpress-integration)

For Developers

-   [Sign PDF with React](/react-document-signing)
-   [Sign PDF with Vue](/vue-document-signing)
-   [Sign PDF with Angular](/angular-document-signing)
-   [Sign PDF with Next.js](/nextjs-document-signing)
-   [Sign PDF with PHP](/guides/sign-pdf-with-php)
-   [Sign PDF with JavaScript](/guides/sign-pdf-with-javascript)
-   [Sign PDF with Python](/guides/sign-pdf-with-python)
-   [Sign PDF with Ruby](/guides/sign-pdf-with-ruby-on-rails)
-   [Sign PDF with Java](/guides/sign-pdf-with-java)
-   [Sign PDF with C#](/guides/sign-pdf-with-c-sharp)
-   [Sign PDF with Kotlin](/guides/sign-pdf-with-kotlin)
-   [Sign PDF with Flutter](/guides/sign-pdf-with-flutter)

Company

-   [Pricing](/pricing)
-   [Blog](/blog)
-   [About Us](/about)
-   [Compliance](/compliance)
-   [Changelog](/changelog)
-   [eSign Disclosure](/esign-disclosure)
-   [Security](/security)
-   [Privacy Policy](/privacy)
-   [GDPR](/privacy/gdpr)
-   [Terms and Conditions](/terms)
-   [Trust Center](https://trust.docuseal.com/)

Community

-   [Discord server](https://discord.gg/qygYCDGck9)
-   [Twitter account](https://twitter.com/docusealco)
-   [Bluesky](https://bsky.app/profile/docuseal.com)
-   [GitHub](https://github.com/docusealco/docuseal)
-   [Contact Us](/contact)
-   [Status](https://status.docuseal.net/)

[

DocuSeal

](/)

© 2025 DocuSeal LLC 332 S Michigan Ave, Suite 121 #5896, Chicago IL 60604