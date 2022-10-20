import author from "./author";
import blog from "./blog";
import createSchema from "part:@sanity/base/schema-creator";
import profile from "./profile";
import schemaTypes from "all:part:@sanity/base/schema-type";

// First, we must import the schema creator

// Then import schema types from any plugins that might expose them


// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  name: "default",
  types: schemaTypes.concat([blog, author, profile]),
});
