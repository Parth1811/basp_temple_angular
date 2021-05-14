/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";

export interface SubscriptionResponse<T> {
  value: GraphQLResult<T>;
}

export type CreateFestivalEventInput = {
  id?: string | null;
  title: string;
  date: string;
  description?: string | null;
  img_link?: string | null;
};

export type ModelFestivalEventConditionInput = {
  title?: ModelStringInput | null;
  date?: ModelStringInput | null;
  description?: ModelStringInput | null;
  img_link?: ModelStringInput | null;
  and?: Array<ModelFestivalEventConditionInput | null> | null;
  or?: Array<ModelFestivalEventConditionInput | null> | null;
  not?: ModelFestivalEventConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null"
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type FestivalEvent = {
  __typename: "FestivalEvent";
  id?: string;
  title?: string;
  date?: string;
  description?: string | null;
  img_link?: string | null;
  createdAt?: string;
  updatedAt?: string;
};

export type UpdateFestivalEventInput = {
  id: string;
  title?: string | null;
  date?: string | null;
  description?: string | null;
  img_link?: string | null;
};

export type DeleteFestivalEventInput = {
  id?: string | null;
};

export type ModelFestivalEventFilterInput = {
  id?: ModelIDInput | null;
  title?: ModelStringInput | null;
  date?: ModelStringInput | null;
  description?: ModelStringInput | null;
  img_link?: ModelStringInput | null;
  and?: Array<ModelFestivalEventFilterInput | null> | null;
  or?: Array<ModelFestivalEventFilterInput | null> | null;
  not?: ModelFestivalEventFilterInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type ModelFestivalEventConnection = {
  __typename: "ModelFestivalEventConnection";
  items?: Array<FestivalEvent | null> | null;
  nextToken?: string | null;
};

export type CreateFestivalEventMutation = {
  __typename: "FestivalEvent";
  id: string;
  title: string;
  date: string;
  description?: string | null;
  img_link?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateFestivalEventMutation = {
  __typename: "FestivalEvent";
  id: string;
  title: string;
  date: string;
  description?: string | null;
  img_link?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteFestivalEventMutation = {
  __typename: "FestivalEvent";
  id: string;
  title: string;
  date: string;
  description?: string | null;
  img_link?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type GetFestivalEventQuery = {
  __typename: "FestivalEvent";
  id: string;
  title: string;
  date: string;
  description?: string | null;
  img_link?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type ListFestivalEventsQuery = {
  __typename: "ModelFestivalEventConnection";
  items?: Array<{
    __typename: "FestivalEvent";
    id: string;
    title: string;
    date: string;
    description?: string | null;
    img_link?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken?: string | null;
};

export type OnCreateFestivalEventSubscription = {
  __typename: "FestivalEvent";
  id: string;
  title: string;
  date: string;
  description?: string | null;
  img_link?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateFestivalEventSubscription = {
  __typename: "FestivalEvent";
  id: string;
  title: string;
  date: string;
  description?: string | null;
  img_link?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteFestivalEventSubscription = {
  __typename: "FestivalEvent";
  id: string;
  title: string;
  date: string;
  description?: string | null;
  img_link?: string | null;
  createdAt: string;
  updatedAt: string;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateFestivalEvent(
    input: CreateFestivalEventInput,
    condition?: ModelFestivalEventConditionInput
  ): Promise<CreateFestivalEventMutation> {
    const statement = `mutation CreateFestivalEvent($input: CreateFestivalEventInput!, $condition: ModelFestivalEventConditionInput) {
        createFestivalEvent(input: $input, condition: $condition) {
          __typename
          id
          title
          date
          description
          img_link
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateFestivalEventMutation>response.data.createFestivalEvent;
  }
  async UpdateFestivalEvent(
    input: UpdateFestivalEventInput,
    condition?: ModelFestivalEventConditionInput
  ): Promise<UpdateFestivalEventMutation> {
    const statement = `mutation UpdateFestivalEvent($input: UpdateFestivalEventInput!, $condition: ModelFestivalEventConditionInput) {
        updateFestivalEvent(input: $input, condition: $condition) {
          __typename
          id
          title
          date
          description
          img_link
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateFestivalEventMutation>response.data.updateFestivalEvent;
  }
  async DeleteFestivalEvent(
    input: DeleteFestivalEventInput,
    condition?: ModelFestivalEventConditionInput
  ): Promise<DeleteFestivalEventMutation> {
    const statement = `mutation DeleteFestivalEvent($input: DeleteFestivalEventInput!, $condition: ModelFestivalEventConditionInput) {
        deleteFestivalEvent(input: $input, condition: $condition) {
          __typename
          id
          title
          date
          description
          img_link
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteFestivalEventMutation>response.data.deleteFestivalEvent;
  }
  async GetFestivalEvent(id: string): Promise<GetFestivalEventQuery> {
    const statement = `query GetFestivalEvent($id: ID!) {
        getFestivalEvent(id: $id) {
          __typename
          id
          title
          date
          description
          img_link
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetFestivalEventQuery>response.data.getFestivalEvent;
  }
  async ListFestivalEvents(
    filter?: ModelFestivalEventFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListFestivalEventsQuery> {
    const statement = `query ListFestivalEvents($filter: ModelFestivalEventFilterInput, $limit: Int, $nextToken: String) {
        listFestivalEvents(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            title
            date
            description
            img_link
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListFestivalEventsQuery>response.data.listFestivalEvents;
  }
  OnCreateFestivalEventListener: Observable<
    SubscriptionResponse<OnCreateFestivalEventSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateFestivalEvent {
        onCreateFestivalEvent {
          __typename
          id
          title
          date
          description
          img_link
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreateFestivalEventSubscription>>;

  OnUpdateFestivalEventListener: Observable<
    SubscriptionResponse<OnUpdateFestivalEventSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateFestivalEvent {
        onUpdateFestivalEvent {
          __typename
          id
          title
          date
          description
          img_link
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdateFestivalEventSubscription>>;

  OnDeleteFestivalEventListener: Observable<
    SubscriptionResponse<OnDeleteFestivalEventSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteFestivalEvent {
        onDeleteFestivalEvent {
          __typename
          id
          title
          date
          description
          img_link
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeleteFestivalEventSubscription>>;
}
