const {
    ApolloServer,
    gql
} = require('apollo-server');
const {
    GraphQLScalarType,
    Kind
} = require('graphql');


const DateCustom = new GraphQLScalarType({
    name: 'Date',
    description: 'Custom Scalar Date',
    parseValue(value) {
        return new Date(value);
    },
    serialize(value) {
        return value.getTime();
    },
    parseLiteral(ast) {
        if (ast.kind == Kind.INT) {
            return parseInt(ast.value, 10);
        }
        return null;
    }
})

module.exports = {
    DateCustom
};