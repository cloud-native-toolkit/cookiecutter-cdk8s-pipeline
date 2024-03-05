import { App, Chart, ChartProps } from 'cdk8s';
import { ParameterBuilder, PipelineBuilder, TaskBuilder, WorkspaceBuilder } from 'cdk8s-pipelines';
import { Construct } from 'constructs';

export class MyPipeline extends Chart {
  constructor(scope: Construct, id: string, props: ChartProps = {}) {
    super(scope, id, props);

    // Replace the methods of this PipelineBuilder to create your own Pipeline
    // See https://constructs.dev/packages/cdk8s-pipelines/v/0.0.16/api/PipelineBuilder?lang=typescript
    new PipelineBuilder(this, 'my-pipeline')
      .withName('clone-build-push')
      .withDescription('This pipeline closes a repository, builds a Docker image, etc.')
      // You can add your own custom tasks here or you can use tasks from Tekton Hub with
      // cdks-piplines-lib. See https://github.com/cloud-native-toolkit/cdk8s-pipelines-lib
      .withTask(new TaskBuilder(this, 'fetch-source')
        .withName('git-clone')
        .withWorkspace(new WorkspaceBuilder('output').withName('task-output'))
        .withStringParam(new ParameterBuilder('url').withPiplineParameter('url').withDescription('the URL for the thing')))
      // If you do not need it to build dependant tasks, you can set `includeDependencies` to `false`.
      .buildPipeline({
        includeDependencies: true,
      });

  }
}

const app = new App();
new MyPipeline(app, '{{cookiecutter.pipeline_slug}}-pipeline');
app.synth();
