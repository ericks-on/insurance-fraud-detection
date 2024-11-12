export type User = {
    id: number;
    username: string;
    password: string;
    age: number;
    insured_zip: string;
    insured_sex: string;
    insured_education_level: string;
    insured_occupation: string;
    insured_hobbies: string;
    insured_relationship: string;
    auto_make: string;
    auto_model: string;
    auto_year: number;
}

export type Policy = {
    policy_number: string;
    customer_id: number;
    policy_bind_date: string;
    policy_state: string;
    policy_csl: string;
    policy_deductable: number;
    policy_annual_premium: number;
    umbrella_limit: number;
}

export type Claim = {
    claim_id: string;
    policy_number: string;
    incident_date: string;
    incident_type: string;
    collision_type: string;
    incident_severity: string;
    authorities_contacted: string;
    incident_state: string;
    incident_location: string;
    incident_hour_of_day: number;
    number_of_vehicles_involved: number;
    property_damage: string;
    bodily_injuries: number;
    witnesses: number;
    police_report_available: boolean;
    total_claim_amount: number;
    injury_claim:number;
    property_claim:number;
    vehicle_claim: number;
    auto_make: string;
    auto_model: string;
    auto_year: number;
    capital_gain: number;
    capital_loss: number;
    month_as_customer: number;
}

export type Blacklist ={
    id: string
    customer_id:string;
    reason: string;
    blacklist_date: string;
}

export type FraudConfirmed = {
    id: string;
    claim_id: string;
    is_confirmed: boolean;
}