function config(externals){
  const internals = {
    foo: "foo",
  }

  return {
    ...internals,
    ...externals,
  }
}
