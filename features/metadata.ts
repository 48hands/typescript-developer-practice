import 'reflect-metadata';

@controller
class Plane {
  color: string = 'red';

  //@test
  @get('/')
  fly(): void {
    console.log('vrrrrrrrrr');
  }
}

function test(target: Plane, key: string) {
  console.log(target); // Plane { fly: [Function] }
  console.log(key); // fly
}

function get(path: string) {
  return function(target: Plane, key: string) {
    // target.keyにsecret'という名前のMetadataを定義(値がsecretInfo)
    Reflect.defineMetadata('path', path, target, key);
  };
}

function controller(target: typeof Plane) {
  for (let key in target.prototype) {
    const path = Reflect.getMetadata('path', target.prototype, key);
    const middleware = Reflect.getMetadata('middleware', target.prototype, key);
    // router.get(path, middleware, target.prototype[key]);
  }
}
