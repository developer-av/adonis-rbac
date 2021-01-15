const { HttpException, InvalidArgumentException } = require('@adonisjs/generic-exceptions')

module.exports = class Rbac {

  async handle({ auth }, next, properties) {
    if (!properties[0]){
      throw new InvalidArgumentException('Role is required!');
    }
    if (!auth.user || !auth.user.can(properties[0])){
      throw new HttpException('Forbidden.', 403)
    }
    await next()
  }

}
