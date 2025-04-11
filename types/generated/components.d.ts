import type { Schema, Struct } from '@strapi/strapi';

export interface DefaultAddress extends Struct.ComponentSchema {
  collectionName: 'components_default_addresses';
  info: {
    displayName: 'Address';
    icon: 'pinMap';
  };
  attributes: {
    City: Schema.Attribute.String;
    houseNumber: Schema.Attribute.String;
    Street: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'default.address': DefaultAddress;
    }
  }
}
