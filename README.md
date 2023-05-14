**What is Instance Method?**
Means, Instance Method = Instance+Method
here Instance means,
example,
class Parent {
......
.....
}
const mother = new Parent(....) // here, mother is instance of Parent.

Means,
Instance Method is a instance of Class + some methods

Example,

const user = new User(payload); // Here, User is class and user is instance of that class
await user.save(); // here, user is a instance and save is a method. this means user.save() is an instance method. this instance method is builtin.

Let's create a custom instance method
//1. create an interface for methods
export interface IUserMethods {
fullName(): string;
}

//2. Create a new Model type that knows about IUserMethods...
type UserModel = Model<IUser, {}, IUserMethods>;

//3. Pass IUser, UserModel, and IUserMethods in schema
const userSchema = new Schema<IUser, UserModel, IUserMethods>({
.......
.......

//4. Now, I have to write function definition like this
userSchema.method("fullName", function fullName() {
return (
this.name.firstName + " " + this.name.middleName + " " + this.name.lastName
);
});
});

//5. I have to pass that UserModel in User model generic as a parameter. like this
const User = model<IUser, UserModel>("User", userSchema);

//6. Now I can use fullname function with the help of instance of User model, like this
console.log(user.fullName())

Summery of the instance method is, Instance method is only work when I create a instance with the help of model

**_What is static in Class?_**
Static is a attached methods of class, which i can directly call with That class( not instance of class).
// Example
Class => Attached --> Methods -->Directly call using class

Example for instance,
const user = new User()
user.fullName()

Example for Static
User.fullName()


**How to Implement both Static and Method?**