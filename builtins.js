export const builtins = {
  exit: () => Deno.exit(0),
  cd: (args) => {
    const dir = args[0];

    if (dir === undefined) {
      Deno.env.set("OLDPWD", Deno.cwd());
      Deno.chdir(Deno.env.get("HOME"));
      return;
    }

    if (dir === "-") {
      Deno.chdir(Deno.env.get("OLDPWD"));
      return;
    }

    Deno.env.set("OLDPWD", Deno.cwd());
    Deno.chdir(dir);
  },
};
