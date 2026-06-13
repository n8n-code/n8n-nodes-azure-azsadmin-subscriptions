import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';


export class AzureAzsadminSubscriptions implements INodeType {
        description: INodeTypeDescription = {
                displayName: 'Azure Azsadmin Subscriptions',
                name: 'N8nDevAzureAzsadminSubscriptions',
                icon: { light: 'file:./azure-azsadmin-subscriptions.png', dark: 'file:./azure-azsadmin-subscriptions.dark.png' },
                group: ['input'],
                version: 1,
                subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
                description: 'User Subscription Management Client.',
                defaults: { name: 'Azure Azsadmin Subscriptions' },
                usableAsTool: true,
                inputs: [NodeConnectionTypes.Main],
                outputs: [NodeConnectionTypes.Main],
                credentials: [
                        {
                                name: 'N8nDevAzureAzsadminSubscriptionsApi',
                                required: true,
                        },
                ],
                requestDefaults: {
                        baseURL: '={{\$credentials.url}}',
                        headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                        },
                },
                properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [],
			"default": ""
		},
		
                ],
        };
}
