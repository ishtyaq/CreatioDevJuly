define("UsrRealtyTypeListPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "TopAreaProfileContainer",
				"values": {
					"visible": true,
					"alignItems": "stretch"
				}
			},
			{
				"operation": "insert",
				"name": "DataGrid_l796e20",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 10,
						"row": 1,
						"rowSpan": 16
					},
					"type": "crt.DataGrid",
					"features": {
						"rows": {
							"selection": {
								"enable": true,
								"multiple": true
							}
						}
					},
					"items": "$DataGrid_l796e20",
					"visible": true,
					"fitContent": true,
					"primaryColumnName": "DataGrid_l796e20DS_Id",
					"columns": [
						{
							"id": "da1e2cd3-7c35-48cc-9050-b8619910ec11",
							"code": "DataGrid_l796e20DS_Name",
							"caption": "#ResourceString(DataGrid_l796e20DS_Name)#",
							"dataValueType": 28
						},
						{
							"id": "95ba6afe-b445-307d-4c87-811479be0f25",
							"code": "DataGrid_l796e20DS_Name",
							"caption": "#ResourceString(DataGrid_l796e20DS_Name)#",
							"dataValueType": 28
						},
						{
							"id": "62b79153-5fe7-7a62-9a15-c992f741a809",
							"code": "DataGrid_l796e20DS_UsrMyColor",
							"caption": "#ResourceString(DataGrid_l796e20DS_UsrMyColor)#",
							"dataValueType": 18
						},
						{
							"id": "4ae78d57-dcee-1f26-9ae7-c864e068004e",
							"code": "DataGrid_l796e20DS_Id",
							"caption": "#ResourceString(DataGrid_l796e20DS_Id)#",
							"dataValueType": 0
						},
						{
							"id": "4f5d241e-256e-e882-a74d-6a5ca362f812",
							"code": "DataGrid_l796e20DS_Description",
							"caption": "#ResourceString(DataGrid_l796e20DS_Description)#",
							"dataValueType": 28
						},
						{
							"id": "f28b307f-611d-b6b4-77f5-7b86259115e4",
							"code": "DataGrid_l796e20DS_CreatedOn",
							"caption": "#ResourceString(DataGrid_l796e20DS_CreatedOn)#",
							"dataValueType": 7
						}
					],
					"placeholder": false
				},
				"parentName": "TopAreaProfileContainer",
				"propertyName": "items",
				"index": 0
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"DataGrid_l796e20": {
						"isCollection": true,
						"modelConfig": {
							"path": "DataGrid_l796e20DS"
						},
						"viewModelConfig": {
							"attributes": {
								"DataGrid_l796e20DS_Name": {
									"modelConfig": {
										"path": "DataGrid_l796e20DS.Name"
									}
								},
								"DataGrid_l796e20DS_UsrMyColor": {
									"modelConfig": {
										"path": "DataGrid_l796e20DS.UsrMyColor"
									}
								},
								"DataGrid_l796e20DS_Id": {
									"modelConfig": {
										"path": "DataGrid_l796e20DS.Id"
									}
								},
								"DataGrid_l796e20DS_Description": {
									"modelConfig": {
										"path": "DataGrid_l796e20DS.Description"
									}
								},
								"DataGrid_l796e20DS_CreatedOn": {
									"modelConfig": {
										"path": "DataGrid_l796e20DS.CreatedOn"
									}
								}
							}
						}
					}
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [],
				"values": {
					"dataSources": {
						"DataGrid_l796e20DS": {
							"type": "crt.EntityDataSource",
							"scope": "viewElement",
							"config": {
								"entitySchemaName": "UsrRealtyType",
								"attributes": {
									"Name": {
										"path": "Name"
									},
									"UsrMyColor": {
										"path": "UsrMyColor"
									},
									"Id": {
										"path": "Id"
									},
									"Description": {
										"path": "Description"
									},
									"CreatedOn": {
										"path": "CreatedOn"
									}
								}
							}
						}
					}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});