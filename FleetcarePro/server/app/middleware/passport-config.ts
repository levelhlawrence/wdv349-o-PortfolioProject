import { PassportStatic } from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import bcrypt from "bcrypt";
import User from "../models/user";

export default function configurePassport(passport: PassportStatic) {
  // Local Strategy
  passport.use(
    new LocalStrategy(
      {
        usernameField: "email",
        passwordField: "password",
      },
      async (email, password, done) => {
        try {
          const user = await User.findOne({ where: { email } });

          if (!user) return done(null, false, { message: "User not found" });

          const isMatch = await bcrypt.compare(password, user.password!);

          if (!isMatch)
            return done(null, false, { message: "Incorrect password" });

          return done(null, user);
        } catch (error) {
          return done(error);
        }
      }
    )
  );

  passport.serializeUser((user: any, done) => done(null, user.id));

  passport.deserializeUser(async (id: number, done) => {
    try {
      const user = await User.findByPk(id);
      if (user) {
        done(null, user);
      } else {
        done(null, false);
      }
    } catch (error) {
      done(error, null);
    }
  });
}
