# State management: Context and Recoil (with Typescript)

In this project I am trying out Context and Recoil to work with global states. We have user login that is managed with Context and a light/dark theme that is managed with Recoil :zap:

In  [_app.tsx](src/pages/_app.tsx) you can see that I have wrapped the App in RecoilRoot. That means that we can use Recoil globally here. But if you only plan to use it in a specific component, you can just wrap that one.

In the state folder you can see where I introduce [the user context](src/state/user-context.ts) and [theme recoil state](src/state/theme-recoil.ts).

In the components folder there is [login component](src/components/login.tsx) where user login gets handled via context. There is also a [logged-in component](src/components/logged-in.tsx) that renders a welcome message to the user that changes with the color theme. Finally there is the [theme component](src/components/theme-wrapper.tsx) where the Recoil state is used to make a light/dark theme.

You can see everything come together in [index.tsx](src/pages/index.tsx) 

