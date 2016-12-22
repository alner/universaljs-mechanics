module.exports = function() {
    var faker = require("faker");
    var _ = require("lodash");

    return {
            persons: _.times(1000, (n) => {
                return {
                    id: n,
                    Name: faker.name.findName(),
                    Avatar: faker.image.avatar()
                }
            })
    }
}