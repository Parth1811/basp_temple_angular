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

export type CreateUserInput = {
  id?: string | null;
  username: string;
  first_name: string;
  last_name?: string | null;
  email: string;
  phone_number?: string | null;
  profile_photo?: string | null;
  address?: string | null;
  birthdate?: string | null;
  gender?: Gender | null;
  isAdmin?: boolean | null;
};

export enum Gender {
  MALE = "MALE",
  FEMALE = "FEMALE",
  OTHER = "OTHER"
}

export type ModelUserConditionInput = {
  username?: ModelIDInput | null;
  first_name?: ModelStringInput | null;
  last_name?: ModelStringInput | null;
  email?: ModelStringInput | null;
  phone_number?: ModelStringInput | null;
  profile_photo?: ModelStringInput | null;
  address?: ModelStringInput | null;
  birthdate?: ModelStringInput | null;
  gender?: ModelGenderInput | null;
  isAdmin?: ModelBooleanInput | null;
  and?: Array<ModelUserConditionInput | null> | null;
  or?: Array<ModelUserConditionInput | null> | null;
  not?: ModelUserConditionInput | null;
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

export type ModelGenderInput = {
  eq?: Gender | null;
  ne?: Gender | null;
};

export type ModelBooleanInput = {
  ne?: boolean | null;
  eq?: boolean | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type User = {
  __typename: "User";
  id?: string;
  username?: string;
  first_name?: string;
  last_name?: string | null;
  email?: string;
  phone_number?: string | null;
  profile_photo?: string | null;
  address?: string | null;
  birthdate?: string | null;
  gender?: Gender | null;
  isAdmin?: boolean | null;
  createdAt?: string;
  updatedAt?: string;
  owner?: string | null;
  tx_paid?: ModelTranscationConnection;
  tx_created?: ModelTranscationConnection;
};

export type ModelTranscationConnection = {
  __typename: "ModelTranscationConnection";
  items?: Array<Transcation | null> | null;
  nextToken?: string | null;
};

export type Transcation = {
  __typename: "Transcation";
  id?: string;
  paidById?: string;
  createdById?: string;
  amount?: number;
  tx_type?: string;
  tx_id?: string;
  tx_details?: string | null;
  createdAt?: string;
  updatedAt?: string;
  paidBy?: User;
  createdBy?: User;
};

export type UpdateUserInput = {
  id: string;
  username?: string | null;
  first_name?: string | null;
  last_name?: string | null;
  email?: string | null;
  phone_number?: string | null;
  profile_photo?: string | null;
  address?: string | null;
  birthdate?: string | null;
  gender?: Gender | null;
  isAdmin?: boolean | null;
};

export type DeleteUserInput = {
  id?: string | null;
};

export type CreateTranscationInput = {
  id?: string | null;
  paidById: string;
  createdById: string;
  amount: number;
  tx_type: string;
  tx_id: string;
  tx_details?: string | null;
};

export type ModelTranscationConditionInput = {
  paidById?: ModelIDInput | null;
  createdById?: ModelIDInput | null;
  amount?: ModelIntInput | null;
  tx_type?: ModelStringInput | null;
  tx_id?: ModelStringInput | null;
  tx_details?: ModelStringInput | null;
  and?: Array<ModelTranscationConditionInput | null> | null;
  or?: Array<ModelTranscationConditionInput | null> | null;
  not?: ModelTranscationConditionInput | null;
};

export type ModelIntInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type UpdateTranscationInput = {
  id: string;
  paidById?: string | null;
  createdById?: string | null;
  amount?: number | null;
  tx_type?: string | null;
  tx_id?: string | null;
  tx_details?: string | null;
};

export type DeleteTranscationInput = {
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

export type ModelFestivalEventConnection = {
  __typename: "ModelFestivalEventConnection";
  items?: Array<FestivalEvent | null> | null;
  nextToken?: string | null;
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null;
  username?: ModelIDInput | null;
  first_name?: ModelStringInput | null;
  last_name?: ModelStringInput | null;
  email?: ModelStringInput | null;
  phone_number?: ModelStringInput | null;
  profile_photo?: ModelStringInput | null;
  address?: ModelStringInput | null;
  birthdate?: ModelStringInput | null;
  gender?: ModelGenderInput | null;
  isAdmin?: ModelBooleanInput | null;
  and?: Array<ModelUserFilterInput | null> | null;
  or?: Array<ModelUserFilterInput | null> | null;
  not?: ModelUserFilterInput | null;
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection";
  items?: Array<User | null> | null;
  nextToken?: string | null;
};

export type ModelTranscationFilterInput = {
  id?: ModelIDInput | null;
  paidById?: ModelIDInput | null;
  createdById?: ModelIDInput | null;
  amount?: ModelIntInput | null;
  tx_type?: ModelStringInput | null;
  tx_id?: ModelStringInput | null;
  tx_details?: ModelStringInput | null;
  and?: Array<ModelTranscationFilterInput | null> | null;
  or?: Array<ModelTranscationFilterInput | null> | null;
  not?: ModelTranscationFilterInput | null;
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

export type CreateUserMutation = {
  __typename: "User";
  id: string;
  username: string;
  first_name: string;
  last_name?: string | null;
  email: string;
  phone_number?: string | null;
  profile_photo?: string | null;
  address?: string | null;
  birthdate?: string | null;
  gender?: Gender | null;
  isAdmin?: boolean | null;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
  tx_paid?: {
    __typename: "ModelTranscationConnection";
    items?: Array<{
      __typename: "Transcation";
      id: string;
      paidById: string;
      createdById: string;
      amount: number;
      tx_type: string;
      tx_id: string;
      tx_details?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  tx_created?: {
    __typename: "ModelTranscationConnection";
    items?: Array<{
      __typename: "Transcation";
      id: string;
      paidById: string;
      createdById: string;
      amount: number;
      tx_type: string;
      tx_id: string;
      tx_details?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
};

export type UpdateUserMutation = {
  __typename: "User";
  id: string;
  username: string;
  first_name: string;
  last_name?: string | null;
  email: string;
  phone_number?: string | null;
  profile_photo?: string | null;
  address?: string | null;
  birthdate?: string | null;
  gender?: Gender | null;
  isAdmin?: boolean | null;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
  tx_paid?: {
    __typename: "ModelTranscationConnection";
    items?: Array<{
      __typename: "Transcation";
      id: string;
      paidById: string;
      createdById: string;
      amount: number;
      tx_type: string;
      tx_id: string;
      tx_details?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  tx_created?: {
    __typename: "ModelTranscationConnection";
    items?: Array<{
      __typename: "Transcation";
      id: string;
      paidById: string;
      createdById: string;
      amount: number;
      tx_type: string;
      tx_id: string;
      tx_details?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
};

export type DeleteUserMutation = {
  __typename: "User";
  id: string;
  username: string;
  first_name: string;
  last_name?: string | null;
  email: string;
  phone_number?: string | null;
  profile_photo?: string | null;
  address?: string | null;
  birthdate?: string | null;
  gender?: Gender | null;
  isAdmin?: boolean | null;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
  tx_paid?: {
    __typename: "ModelTranscationConnection";
    items?: Array<{
      __typename: "Transcation";
      id: string;
      paidById: string;
      createdById: string;
      amount: number;
      tx_type: string;
      tx_id: string;
      tx_details?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  tx_created?: {
    __typename: "ModelTranscationConnection";
    items?: Array<{
      __typename: "Transcation";
      id: string;
      paidById: string;
      createdById: string;
      amount: number;
      tx_type: string;
      tx_id: string;
      tx_details?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
};

export type CreateTranscationMutation = {
  __typename: "Transcation";
  id: string;
  paidById: string;
  createdById: string;
  amount: number;
  tx_type: string;
  tx_id: string;
  tx_details?: string | null;
  createdAt: string;
  updatedAt: string;
  paidBy?: {
    __typename: "User";
    id: string;
    username: string;
    first_name: string;
    last_name?: string | null;
    email: string;
    phone_number?: string | null;
    profile_photo?: string | null;
    address?: string | null;
    birthdate?: string | null;
    gender?: Gender | null;
    isAdmin?: boolean | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
    tx_paid?: {
      __typename: "ModelTranscationConnection";
      nextToken?: string | null;
    } | null;
    tx_created?: {
      __typename: "ModelTranscationConnection";
      nextToken?: string | null;
    } | null;
  } | null;
  createdBy?: {
    __typename: "User";
    id: string;
    username: string;
    first_name: string;
    last_name?: string | null;
    email: string;
    phone_number?: string | null;
    profile_photo?: string | null;
    address?: string | null;
    birthdate?: string | null;
    gender?: Gender | null;
    isAdmin?: boolean | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
    tx_paid?: {
      __typename: "ModelTranscationConnection";
      nextToken?: string | null;
    } | null;
    tx_created?: {
      __typename: "ModelTranscationConnection";
      nextToken?: string | null;
    } | null;
  } | null;
};

export type UpdateTranscationMutation = {
  __typename: "Transcation";
  id: string;
  paidById: string;
  createdById: string;
  amount: number;
  tx_type: string;
  tx_id: string;
  tx_details?: string | null;
  createdAt: string;
  updatedAt: string;
  paidBy?: {
    __typename: "User";
    id: string;
    username: string;
    first_name: string;
    last_name?: string | null;
    email: string;
    phone_number?: string | null;
    profile_photo?: string | null;
    address?: string | null;
    birthdate?: string | null;
    gender?: Gender | null;
    isAdmin?: boolean | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
    tx_paid?: {
      __typename: "ModelTranscationConnection";
      nextToken?: string | null;
    } | null;
    tx_created?: {
      __typename: "ModelTranscationConnection";
      nextToken?: string | null;
    } | null;
  } | null;
  createdBy?: {
    __typename: "User";
    id: string;
    username: string;
    first_name: string;
    last_name?: string | null;
    email: string;
    phone_number?: string | null;
    profile_photo?: string | null;
    address?: string | null;
    birthdate?: string | null;
    gender?: Gender | null;
    isAdmin?: boolean | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
    tx_paid?: {
      __typename: "ModelTranscationConnection";
      nextToken?: string | null;
    } | null;
    tx_created?: {
      __typename: "ModelTranscationConnection";
      nextToken?: string | null;
    } | null;
  } | null;
};

export type DeleteTranscationMutation = {
  __typename: "Transcation";
  id: string;
  paidById: string;
  createdById: string;
  amount: number;
  tx_type: string;
  tx_id: string;
  tx_details?: string | null;
  createdAt: string;
  updatedAt: string;
  paidBy?: {
    __typename: "User";
    id: string;
    username: string;
    first_name: string;
    last_name?: string | null;
    email: string;
    phone_number?: string | null;
    profile_photo?: string | null;
    address?: string | null;
    birthdate?: string | null;
    gender?: Gender | null;
    isAdmin?: boolean | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
    tx_paid?: {
      __typename: "ModelTranscationConnection";
      nextToken?: string | null;
    } | null;
    tx_created?: {
      __typename: "ModelTranscationConnection";
      nextToken?: string | null;
    } | null;
  } | null;
  createdBy?: {
    __typename: "User";
    id: string;
    username: string;
    first_name: string;
    last_name?: string | null;
    email: string;
    phone_number?: string | null;
    profile_photo?: string | null;
    address?: string | null;
    birthdate?: string | null;
    gender?: Gender | null;
    isAdmin?: boolean | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
    tx_paid?: {
      __typename: "ModelTranscationConnection";
      nextToken?: string | null;
    } | null;
    tx_created?: {
      __typename: "ModelTranscationConnection";
      nextToken?: string | null;
    } | null;
  } | null;
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

export type ListUsersQuery = {
  __typename: "ModelUserConnection";
  items?: Array<{
    __typename: "User";
    id: string;
    username: string;
    first_name: string;
    last_name?: string | null;
    email: string;
    phone_number?: string | null;
    profile_photo?: string | null;
    address?: string | null;
    birthdate?: string | null;
    gender?: Gender | null;
    isAdmin?: boolean | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
    tx_paid?: {
      __typename: "ModelTranscationConnection";
      nextToken?: string | null;
    } | null;
    tx_created?: {
      __typename: "ModelTranscationConnection";
      nextToken?: string | null;
    } | null;
  } | null> | null;
  nextToken?: string | null;
};

export type GetUserQuery = {
  __typename: "User";
  id: string;
  username: string;
  first_name: string;
  last_name?: string | null;
  email: string;
  phone_number?: string | null;
  profile_photo?: string | null;
  address?: string | null;
  birthdate?: string | null;
  gender?: Gender | null;
  isAdmin?: boolean | null;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
  tx_paid?: {
    __typename: "ModelTranscationConnection";
    items?: Array<{
      __typename: "Transcation";
      id: string;
      paidById: string;
      createdById: string;
      amount: number;
      tx_type: string;
      tx_id: string;
      tx_details?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  tx_created?: {
    __typename: "ModelTranscationConnection";
    items?: Array<{
      __typename: "Transcation";
      id: string;
      paidById: string;
      createdById: string;
      amount: number;
      tx_type: string;
      tx_id: string;
      tx_details?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
};

export type GetTranscationQuery = {
  __typename: "Transcation";
  id: string;
  paidById: string;
  createdById: string;
  amount: number;
  tx_type: string;
  tx_id: string;
  tx_details?: string | null;
  createdAt: string;
  updatedAt: string;
  paidBy?: {
    __typename: "User";
    id: string;
    username: string;
    first_name: string;
    last_name?: string | null;
    email: string;
    phone_number?: string | null;
    profile_photo?: string | null;
    address?: string | null;
    birthdate?: string | null;
    gender?: Gender | null;
    isAdmin?: boolean | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
    tx_paid?: {
      __typename: "ModelTranscationConnection";
      nextToken?: string | null;
    } | null;
    tx_created?: {
      __typename: "ModelTranscationConnection";
      nextToken?: string | null;
    } | null;
  } | null;
  createdBy?: {
    __typename: "User";
    id: string;
    username: string;
    first_name: string;
    last_name?: string | null;
    email: string;
    phone_number?: string | null;
    profile_photo?: string | null;
    address?: string | null;
    birthdate?: string | null;
    gender?: Gender | null;
    isAdmin?: boolean | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
    tx_paid?: {
      __typename: "ModelTranscationConnection";
      nextToken?: string | null;
    } | null;
    tx_created?: {
      __typename: "ModelTranscationConnection";
      nextToken?: string | null;
    } | null;
  } | null;
};

export type ListTranscationsQuery = {
  __typename: "ModelTranscationConnection";
  items?: Array<{
    __typename: "Transcation";
    id: string;
    paidById: string;
    createdById: string;
    amount: number;
    tx_type: string;
    tx_id: string;
    tx_details?: string | null;
    createdAt: string;
    updatedAt: string;
    paidBy?: {
      __typename: "User";
      id: string;
      username: string;
      first_name: string;
      last_name?: string | null;
      email: string;
      phone_number?: string | null;
      profile_photo?: string | null;
      address?: string | null;
      birthdate?: string | null;
      gender?: Gender | null;
      isAdmin?: boolean | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null;
    createdBy?: {
      __typename: "User";
      id: string;
      username: string;
      first_name: string;
      last_name?: string | null;
      email: string;
      phone_number?: string | null;
      profile_photo?: string | null;
      address?: string | null;
      birthdate?: string | null;
      gender?: Gender | null;
      isAdmin?: boolean | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null;
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

export type OnCreateUserSubscription = {
  __typename: "User";
  id: string;
  username: string;
  first_name: string;
  last_name?: string | null;
  email: string;
  phone_number?: string | null;
  profile_photo?: string | null;
  address?: string | null;
  birthdate?: string | null;
  gender?: Gender | null;
  isAdmin?: boolean | null;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
  tx_paid?: {
    __typename: "ModelTranscationConnection";
    items?: Array<{
      __typename: "Transcation";
      id: string;
      paidById: string;
      createdById: string;
      amount: number;
      tx_type: string;
      tx_id: string;
      tx_details?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  tx_created?: {
    __typename: "ModelTranscationConnection";
    items?: Array<{
      __typename: "Transcation";
      id: string;
      paidById: string;
      createdById: string;
      amount: number;
      tx_type: string;
      tx_id: string;
      tx_details?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
};

export type OnUpdateUserSubscription = {
  __typename: "User";
  id: string;
  username: string;
  first_name: string;
  last_name?: string | null;
  email: string;
  phone_number?: string | null;
  profile_photo?: string | null;
  address?: string | null;
  birthdate?: string | null;
  gender?: Gender | null;
  isAdmin?: boolean | null;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
  tx_paid?: {
    __typename: "ModelTranscationConnection";
    items?: Array<{
      __typename: "Transcation";
      id: string;
      paidById: string;
      createdById: string;
      amount: number;
      tx_type: string;
      tx_id: string;
      tx_details?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  tx_created?: {
    __typename: "ModelTranscationConnection";
    items?: Array<{
      __typename: "Transcation";
      id: string;
      paidById: string;
      createdById: string;
      amount: number;
      tx_type: string;
      tx_id: string;
      tx_details?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
};

export type OnDeleteUserSubscription = {
  __typename: "User";
  id: string;
  username: string;
  first_name: string;
  last_name?: string | null;
  email: string;
  phone_number?: string | null;
  profile_photo?: string | null;
  address?: string | null;
  birthdate?: string | null;
  gender?: Gender | null;
  isAdmin?: boolean | null;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
  tx_paid?: {
    __typename: "ModelTranscationConnection";
    items?: Array<{
      __typename: "Transcation";
      id: string;
      paidById: string;
      createdById: string;
      amount: number;
      tx_type: string;
      tx_id: string;
      tx_details?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  tx_created?: {
    __typename: "ModelTranscationConnection";
    items?: Array<{
      __typename: "Transcation";
      id: string;
      paidById: string;
      createdById: string;
      amount: number;
      tx_type: string;
      tx_id: string;
      tx_details?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
};

export type OnCreateTranscationSubscription = {
  __typename: "Transcation";
  id: string;
  paidById: string;
  createdById: string;
  amount: number;
  tx_type: string;
  tx_id: string;
  tx_details?: string | null;
  createdAt: string;
  updatedAt: string;
  paidBy?: {
    __typename: "User";
    id: string;
    username: string;
    first_name: string;
    last_name?: string | null;
    email: string;
    phone_number?: string | null;
    profile_photo?: string | null;
    address?: string | null;
    birthdate?: string | null;
    gender?: Gender | null;
    isAdmin?: boolean | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
    tx_paid?: {
      __typename: "ModelTranscationConnection";
      nextToken?: string | null;
    } | null;
    tx_created?: {
      __typename: "ModelTranscationConnection";
      nextToken?: string | null;
    } | null;
  } | null;
  createdBy?: {
    __typename: "User";
    id: string;
    username: string;
    first_name: string;
    last_name?: string | null;
    email: string;
    phone_number?: string | null;
    profile_photo?: string | null;
    address?: string | null;
    birthdate?: string | null;
    gender?: Gender | null;
    isAdmin?: boolean | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
    tx_paid?: {
      __typename: "ModelTranscationConnection";
      nextToken?: string | null;
    } | null;
    tx_created?: {
      __typename: "ModelTranscationConnection";
      nextToken?: string | null;
    } | null;
  } | null;
};

export type OnUpdateTranscationSubscription = {
  __typename: "Transcation";
  id: string;
  paidById: string;
  createdById: string;
  amount: number;
  tx_type: string;
  tx_id: string;
  tx_details?: string | null;
  createdAt: string;
  updatedAt: string;
  paidBy?: {
    __typename: "User";
    id: string;
    username: string;
    first_name: string;
    last_name?: string | null;
    email: string;
    phone_number?: string | null;
    profile_photo?: string | null;
    address?: string | null;
    birthdate?: string | null;
    gender?: Gender | null;
    isAdmin?: boolean | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
    tx_paid?: {
      __typename: "ModelTranscationConnection";
      nextToken?: string | null;
    } | null;
    tx_created?: {
      __typename: "ModelTranscationConnection";
      nextToken?: string | null;
    } | null;
  } | null;
  createdBy?: {
    __typename: "User";
    id: string;
    username: string;
    first_name: string;
    last_name?: string | null;
    email: string;
    phone_number?: string | null;
    profile_photo?: string | null;
    address?: string | null;
    birthdate?: string | null;
    gender?: Gender | null;
    isAdmin?: boolean | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
    tx_paid?: {
      __typename: "ModelTranscationConnection";
      nextToken?: string | null;
    } | null;
    tx_created?: {
      __typename: "ModelTranscationConnection";
      nextToken?: string | null;
    } | null;
  } | null;
};

export type OnDeleteTranscationSubscription = {
  __typename: "Transcation";
  id: string;
  paidById: string;
  createdById: string;
  amount: number;
  tx_type: string;
  tx_id: string;
  tx_details?: string | null;
  createdAt: string;
  updatedAt: string;
  paidBy?: {
    __typename: "User";
    id: string;
    username: string;
    first_name: string;
    last_name?: string | null;
    email: string;
    phone_number?: string | null;
    profile_photo?: string | null;
    address?: string | null;
    birthdate?: string | null;
    gender?: Gender | null;
    isAdmin?: boolean | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
    tx_paid?: {
      __typename: "ModelTranscationConnection";
      nextToken?: string | null;
    } | null;
    tx_created?: {
      __typename: "ModelTranscationConnection";
      nextToken?: string | null;
    } | null;
  } | null;
  createdBy?: {
    __typename: "User";
    id: string;
    username: string;
    first_name: string;
    last_name?: string | null;
    email: string;
    phone_number?: string | null;
    profile_photo?: string | null;
    address?: string | null;
    birthdate?: string | null;
    gender?: Gender | null;
    isAdmin?: boolean | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
    tx_paid?: {
      __typename: "ModelTranscationConnection";
      nextToken?: string | null;
    } | null;
    tx_created?: {
      __typename: "ModelTranscationConnection";
      nextToken?: string | null;
    } | null;
  } | null;
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
  async CreateUser(
    input: CreateUserInput,
    condition?: ModelUserConditionInput
  ): Promise<CreateUserMutation> {
    const statement = `mutation CreateUser($input: CreateUserInput!, $condition: ModelUserConditionInput) {
        createUser(input: $input, condition: $condition) {
          __typename
          id
          username
          first_name
          last_name
          email
          phone_number
          profile_photo
          address
          birthdate
          gender
          isAdmin
          createdAt
          updatedAt
          owner
          tx_paid {
            __typename
            items {
              __typename
              id
              paidById
              createdById
              amount
              tx_type
              tx_id
              tx_details
              createdAt
              updatedAt
            }
            nextToken
          }
          tx_created {
            __typename
            items {
              __typename
              id
              paidById
              createdById
              amount
              tx_type
              tx_id
              tx_details
              createdAt
              updatedAt
            }
            nextToken
          }
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
    return <CreateUserMutation>response.data.createUser;
  }
  async UpdateUser(
    input: UpdateUserInput,
    condition?: ModelUserConditionInput
  ): Promise<UpdateUserMutation> {
    const statement = `mutation UpdateUser($input: UpdateUserInput!, $condition: ModelUserConditionInput) {
        updateUser(input: $input, condition: $condition) {
          __typename
          id
          username
          first_name
          last_name
          email
          phone_number
          profile_photo
          address
          birthdate
          gender
          isAdmin
          createdAt
          updatedAt
          owner
          tx_paid {
            __typename
            items {
              __typename
              id
              paidById
              createdById
              amount
              tx_type
              tx_id
              tx_details
              createdAt
              updatedAt
            }
            nextToken
          }
          tx_created {
            __typename
            items {
              __typename
              id
              paidById
              createdById
              amount
              tx_type
              tx_id
              tx_details
              createdAt
              updatedAt
            }
            nextToken
          }
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
    return <UpdateUserMutation>response.data.updateUser;
  }
  async DeleteUser(
    input: DeleteUserInput,
    condition?: ModelUserConditionInput
  ): Promise<DeleteUserMutation> {
    const statement = `mutation DeleteUser($input: DeleteUserInput!, $condition: ModelUserConditionInput) {
        deleteUser(input: $input, condition: $condition) {
          __typename
          id
          username
          first_name
          last_name
          email
          phone_number
          profile_photo
          address
          birthdate
          gender
          isAdmin
          createdAt
          updatedAt
          owner
          tx_paid {
            __typename
            items {
              __typename
              id
              paidById
              createdById
              amount
              tx_type
              tx_id
              tx_details
              createdAt
              updatedAt
            }
            nextToken
          }
          tx_created {
            __typename
            items {
              __typename
              id
              paidById
              createdById
              amount
              tx_type
              tx_id
              tx_details
              createdAt
              updatedAt
            }
            nextToken
          }
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
    return <DeleteUserMutation>response.data.deleteUser;
  }
  async CreateTranscation(
    input: CreateTranscationInput,
    condition?: ModelTranscationConditionInput
  ): Promise<CreateTranscationMutation> {
    const statement = `mutation CreateTranscation($input: CreateTranscationInput!, $condition: ModelTranscationConditionInput) {
        createTranscation(input: $input, condition: $condition) {
          __typename
          id
          paidById
          createdById
          amount
          tx_type
          tx_id
          tx_details
          createdAt
          updatedAt
          paidBy {
            __typename
            id
            username
            first_name
            last_name
            email
            phone_number
            profile_photo
            address
            birthdate
            gender
            isAdmin
            createdAt
            updatedAt
            owner
            tx_paid {
              __typename
              nextToken
            }
            tx_created {
              __typename
              nextToken
            }
          }
          createdBy {
            __typename
            id
            username
            first_name
            last_name
            email
            phone_number
            profile_photo
            address
            birthdate
            gender
            isAdmin
            createdAt
            updatedAt
            owner
            tx_paid {
              __typename
              nextToken
            }
            tx_created {
              __typename
              nextToken
            }
          }
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
    return <CreateTranscationMutation>response.data.createTranscation;
  }
  async UpdateTranscation(
    input: UpdateTranscationInput,
    condition?: ModelTranscationConditionInput
  ): Promise<UpdateTranscationMutation> {
    const statement = `mutation UpdateTranscation($input: UpdateTranscationInput!, $condition: ModelTranscationConditionInput) {
        updateTranscation(input: $input, condition: $condition) {
          __typename
          id
          paidById
          createdById
          amount
          tx_type
          tx_id
          tx_details
          createdAt
          updatedAt
          paidBy {
            __typename
            id
            username
            first_name
            last_name
            email
            phone_number
            profile_photo
            address
            birthdate
            gender
            isAdmin
            createdAt
            updatedAt
            owner
            tx_paid {
              __typename
              nextToken
            }
            tx_created {
              __typename
              nextToken
            }
          }
          createdBy {
            __typename
            id
            username
            first_name
            last_name
            email
            phone_number
            profile_photo
            address
            birthdate
            gender
            isAdmin
            createdAt
            updatedAt
            owner
            tx_paid {
              __typename
              nextToken
            }
            tx_created {
              __typename
              nextToken
            }
          }
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
    return <UpdateTranscationMutation>response.data.updateTranscation;
  }
  async DeleteTranscation(
    input: DeleteTranscationInput,
    condition?: ModelTranscationConditionInput
  ): Promise<DeleteTranscationMutation> {
    const statement = `mutation DeleteTranscation($input: DeleteTranscationInput!, $condition: ModelTranscationConditionInput) {
        deleteTranscation(input: $input, condition: $condition) {
          __typename
          id
          paidById
          createdById
          amount
          tx_type
          tx_id
          tx_details
          createdAt
          updatedAt
          paidBy {
            __typename
            id
            username
            first_name
            last_name
            email
            phone_number
            profile_photo
            address
            birthdate
            gender
            isAdmin
            createdAt
            updatedAt
            owner
            tx_paid {
              __typename
              nextToken
            }
            tx_created {
              __typename
              nextToken
            }
          }
          createdBy {
            __typename
            id
            username
            first_name
            last_name
            email
            phone_number
            profile_photo
            address
            birthdate
            gender
            isAdmin
            createdAt
            updatedAt
            owner
            tx_paid {
              __typename
              nextToken
            }
            tx_created {
              __typename
              nextToken
            }
          }
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
    return <DeleteTranscationMutation>response.data.deleteTranscation;
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
  async ListUsers(
    filter?: ModelUserFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListUsersQuery> {
    const statement = `query ListUsers($filter: ModelUserFilterInput, $limit: Int, $nextToken: String) {
        listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            username
            first_name
            last_name
            email
            phone_number
            profile_photo
            address
            birthdate
            gender
            isAdmin
            createdAt
            updatedAt
            owner
            tx_paid {
              __typename
              nextToken
            }
            tx_created {
              __typename
              nextToken
            }
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
    return <ListUsersQuery>response.data.listUsers;
  }
  async GetUser(id: string): Promise<GetUserQuery> {
    const statement = `query GetUser($id: ID!) {
        getUser(id: $id) {
          __typename
          id
          username
          first_name
          last_name
          email
          phone_number
          profile_photo
          address
          birthdate
          gender
          isAdmin
          createdAt
          updatedAt
          owner
          tx_paid {
            __typename
            items {
              __typename
              id
              paidById
              createdById
              amount
              tx_type
              tx_id
              tx_details
              createdAt
              updatedAt
            }
            nextToken
          }
          tx_created {
            __typename
            items {
              __typename
              id
              paidById
              createdById
              amount
              tx_type
              tx_id
              tx_details
              createdAt
              updatedAt
            }
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetUserQuery>response.data.getUser;
  }
  async GetTranscation(id: string): Promise<GetTranscationQuery> {
    const statement = `query GetTranscation($id: ID!) {
        getTranscation(id: $id) {
          __typename
          id
          paidById
          createdById
          amount
          tx_type
          tx_id
          tx_details
          createdAt
          updatedAt
          paidBy {
            __typename
            id
            username
            first_name
            last_name
            email
            phone_number
            profile_photo
            address
            birthdate
            gender
            isAdmin
            createdAt
            updatedAt
            owner
            tx_paid {
              __typename
              nextToken
            }
            tx_created {
              __typename
              nextToken
            }
          }
          createdBy {
            __typename
            id
            username
            first_name
            last_name
            email
            phone_number
            profile_photo
            address
            birthdate
            gender
            isAdmin
            createdAt
            updatedAt
            owner
            tx_paid {
              __typename
              nextToken
            }
            tx_created {
              __typename
              nextToken
            }
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetTranscationQuery>response.data.getTranscation;
  }
  async ListTranscations(
    filter?: ModelTranscationFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListTranscationsQuery> {
    const statement = `query ListTranscations($filter: ModelTranscationFilterInput, $limit: Int, $nextToken: String) {
        listTranscations(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            paidById
            createdById
            amount
            tx_type
            tx_id
            tx_details
            createdAt
            updatedAt
            paidBy {
              __typename
              id
              username
              first_name
              last_name
              email
              phone_number
              profile_photo
              address
              birthdate
              gender
              isAdmin
              createdAt
              updatedAt
              owner
            }
            createdBy {
              __typename
              id
              username
              first_name
              last_name
              email
              phone_number
              profile_photo
              address
              birthdate
              gender
              isAdmin
              createdAt
              updatedAt
              owner
            }
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
    return <ListTranscationsQuery>response.data.listTranscations;
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

  OnCreateUserListener(
    owner?: string
  ): Observable<SubscriptionResponse<OnCreateUserSubscription>> {
    const statement = `subscription OnCreateUser($owner: String) {
        onCreateUser(owner: $owner) {
          __typename
          id
          username
          first_name
          last_name
          email
          phone_number
          profile_photo
          address
          birthdate
          gender
          isAdmin
          createdAt
          updatedAt
          owner
          tx_paid {
            __typename
            items {
              __typename
              id
              paidById
              createdById
              amount
              tx_type
              tx_id
              tx_details
              createdAt
              updatedAt
            }
            nextToken
          }
          tx_created {
            __typename
            items {
              __typename
              id
              paidById
              createdById
              amount
              tx_type
              tx_id
              tx_details
              createdAt
              updatedAt
            }
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (owner) {
      gqlAPIServiceArguments.owner = owner;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<SubscriptionResponse<OnCreateUserSubscription>>;
  }

  OnUpdateUserListener(
    owner?: string
  ): Observable<SubscriptionResponse<OnUpdateUserSubscription>> {
    const statement = `subscription OnUpdateUser($owner: String) {
        onUpdateUser(owner: $owner) {
          __typename
          id
          username
          first_name
          last_name
          email
          phone_number
          profile_photo
          address
          birthdate
          gender
          isAdmin
          createdAt
          updatedAt
          owner
          tx_paid {
            __typename
            items {
              __typename
              id
              paidById
              createdById
              amount
              tx_type
              tx_id
              tx_details
              createdAt
              updatedAt
            }
            nextToken
          }
          tx_created {
            __typename
            items {
              __typename
              id
              paidById
              createdById
              amount
              tx_type
              tx_id
              tx_details
              createdAt
              updatedAt
            }
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (owner) {
      gqlAPIServiceArguments.owner = owner;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<SubscriptionResponse<OnUpdateUserSubscription>>;
  }

  OnDeleteUserListener(
    owner?: string
  ): Observable<SubscriptionResponse<OnDeleteUserSubscription>> {
    const statement = `subscription OnDeleteUser($owner: String) {
        onDeleteUser(owner: $owner) {
          __typename
          id
          username
          first_name
          last_name
          email
          phone_number
          profile_photo
          address
          birthdate
          gender
          isAdmin
          createdAt
          updatedAt
          owner
          tx_paid {
            __typename
            items {
              __typename
              id
              paidById
              createdById
              amount
              tx_type
              tx_id
              tx_details
              createdAt
              updatedAt
            }
            nextToken
          }
          tx_created {
            __typename
            items {
              __typename
              id
              paidById
              createdById
              amount
              tx_type
              tx_id
              tx_details
              createdAt
              updatedAt
            }
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (owner) {
      gqlAPIServiceArguments.owner = owner;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<SubscriptionResponse<OnDeleteUserSubscription>>;
  }

  OnCreateTranscationListener: Observable<
    SubscriptionResponse<OnCreateTranscationSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateTranscation {
        onCreateTranscation {
          __typename
          id
          paidById
          createdById
          amount
          tx_type
          tx_id
          tx_details
          createdAt
          updatedAt
          paidBy {
            __typename
            id
            username
            first_name
            last_name
            email
            phone_number
            profile_photo
            address
            birthdate
            gender
            isAdmin
            createdAt
            updatedAt
            owner
            tx_paid {
              __typename
              nextToken
            }
            tx_created {
              __typename
              nextToken
            }
          }
          createdBy {
            __typename
            id
            username
            first_name
            last_name
            email
            phone_number
            profile_photo
            address
            birthdate
            gender
            isAdmin
            createdAt
            updatedAt
            owner
            tx_paid {
              __typename
              nextToken
            }
            tx_created {
              __typename
              nextToken
            }
          }
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreateTranscationSubscription>>;

  OnUpdateTranscationListener: Observable<
    SubscriptionResponse<OnUpdateTranscationSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateTranscation {
        onUpdateTranscation {
          __typename
          id
          paidById
          createdById
          amount
          tx_type
          tx_id
          tx_details
          createdAt
          updatedAt
          paidBy {
            __typename
            id
            username
            first_name
            last_name
            email
            phone_number
            profile_photo
            address
            birthdate
            gender
            isAdmin
            createdAt
            updatedAt
            owner
            tx_paid {
              __typename
              nextToken
            }
            tx_created {
              __typename
              nextToken
            }
          }
          createdBy {
            __typename
            id
            username
            first_name
            last_name
            email
            phone_number
            profile_photo
            address
            birthdate
            gender
            isAdmin
            createdAt
            updatedAt
            owner
            tx_paid {
              __typename
              nextToken
            }
            tx_created {
              __typename
              nextToken
            }
          }
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdateTranscationSubscription>>;

  OnDeleteTranscationListener: Observable<
    SubscriptionResponse<OnDeleteTranscationSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteTranscation {
        onDeleteTranscation {
          __typename
          id
          paidById
          createdById
          amount
          tx_type
          tx_id
          tx_details
          createdAt
          updatedAt
          paidBy {
            __typename
            id
            username
            first_name
            last_name
            email
            phone_number
            profile_photo
            address
            birthdate
            gender
            isAdmin
            createdAt
            updatedAt
            owner
            tx_paid {
              __typename
              nextToken
            }
            tx_created {
              __typename
              nextToken
            }
          }
          createdBy {
            __typename
            id
            username
            first_name
            last_name
            email
            phone_number
            profile_photo
            address
            birthdate
            gender
            isAdmin
            createdAt
            updatedAt
            owner
            tx_paid {
              __typename
              nextToken
            }
            tx_created {
              __typename
              nextToken
            }
          }
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeleteTranscationSubscription>>;
}
