/*
 * Copyright 2023 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

export let tableNestedRows = false;

export function enableTableNestedRows() {
  tableNestedRows = true;
}

// TODO: for some reason calling enableTableNested in the test/global setup doesn't make' TableView's imported tableNestedRows var true...
// Not entirely sure why, works perfectly fine in the stories when calling enableTableNestedRows there and accesing the same imported var. For
// now use a getter
export function getTableNestedRows() {
  return tableNestedRows;
}
