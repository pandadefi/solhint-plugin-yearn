const ruleId = 'underscore-function-args';
const meta = {
  type: 'naming',

  docs: {
    description: 'Function argument itentifiers must start with _',
    category: 'Yearn guidelines',
  },

  isDefault: true,
  recommended: true,
  defaultSetup: ['warn', 45],

  schema: null,
};

class UnderscoreFunctionArgs {
  constructor(reporter, config) {
    this.reporter = reporter;
    this.ruleId = ruleId;
    this.meta = meta;
    this.config = config;
  }

  FunctionDefinition(node) {
    
    node.parameters.forEach(parameter => {
      if (!parameter.name.startsWith('_')) {
        this.reporter.error(parameter, this.ruleId, `Function param "${parameter.name}" name must start with _`)
      }
    })
  }
}

module.exports = UnderscoreFunctionArgs;
