import * as Yup from "yup"
import { DeliveryType, ProjectType } from "../types"

export const projectNewSchema = Yup.object().shape({
  type: Yup.string()
    .oneOf(Object.values(ProjectType) as string[])
    .required("You need to give a project type"),
})

export const projectDeliverySchema = Yup.object().shape({
  delivery: Yup.string()
    .oneOf(Object.values(DeliveryType) as string[])
    .required("You need to choose a delivery method"),
})

export const projectNicknameSchema = Yup.object().shape({
  nickname: Yup.string().required("You need to give a nickname"),
  startDate: Yup.string().required("You need to give a start date"),
})

export const storedProgrammeSchema = Yup.object().shape({
  projects: Yup.array().of(
    Yup.object().shape({
      type: Yup.string()
        .oneOf(Object.values(ProjectType) as string[])
        .required("You need to give a project type"),
      delivery: Yup.string()
        .oneOf(Object.values(DeliveryType) as string[])
        .required("You need to choose a delivery method"),
      nickname: Yup.string().required("You need to give a nickname"),
      startDate: Yup.string().required("You need to give a start date"),
    })
  ),
})
