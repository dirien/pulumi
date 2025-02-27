import * as pulumi from "@pulumi/pulumi";
import * as kubernetes from "@pulumi/kubernetes";

const bar = new kubernetes.core.v1.Pod("bar", {
    apiVersion: "v1",
    metadata: {
        namespace: "foo",
        name: "bar",
    },
    spec: {
        containers: [{
            name: "nginx",
            image: "nginx:1.14-alpine",
            ports: [{
                containerPort: 80,
            }],
            resources: {
                limits: {
                    memory: "20Mi",
                    cpu: "0.2",
                },
            },
        }],
    },
});
const kind = bar.kind;
